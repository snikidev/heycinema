import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { Header, Card, Loader, Search, StatusMessage } from "components";
import { Back, Container } from "./styles";
import { CinemaType } from "types";
import { getMovies } from "utils";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (query: string) => {
    setIsLoading(true);
    setSearchResults([]);

    getMovies(query)
      .then((data) => {
        if ("Error" in data) {
          setStatusMessage(data["Error"]);
        } else {
          // @ts-ignore
          setSearchResults([data]);
        }
        setIsLoading(false);
      });
  };

  return (
    <Back>
      <Header />
      <Container fluid="xl">
        <Row>
          <Col className="mb-4">
            <Search
              placeholder="Search..."
              name="search"
              onSubmit={handleSubmit}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid="xl">
        <Row>
          <Col xs={12} className="mb-4">
            {isLoading && <Loader />}
            {statusMessage && <StatusMessage>{statusMessage}</StatusMessage>}
          </Col>
          <CSSTransition
            in={!!searchResults.length && !isLoading}
            timeout={200}
            unmountOnExit
            appear
            classNames="slide"
          >
            <>
              {searchResults.map((cinema: CinemaType) => (
                <Col xs={12} md={6} key={cinema.imdbID} className="mb-4">
                  <Card cinema={cinema} />
                </Col>
              ))}
            </>
          </CSSTransition>
        </Row>
        <style jsx>{`
          .slide-enter {
            opacity: 0;
            transform: translateY(1em);
          }
          .slide-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: all 300ms ease-in-out;
          }
          .slide-exit {
            opacity: 1;
            transform: translateY(0);
          }
          .slide-exit-active {
            opacity: 0;
            transform: translateY(1em);
            transition: all 300ms ease-in-out;
          }
        `}</style>
      </Container>
    </Back>
  );
};

export default App;

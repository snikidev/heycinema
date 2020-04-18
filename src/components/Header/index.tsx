import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeaderStyled, Logo } from "./styles";

const Header = () => (
  <Container fluid="xl">
    <Row>
      <Col>
        <HeaderStyled>
          <a href="/">
            <Logo type="hey">hey</Logo>
            <Logo type="cinema">cinema</Logo>
          </a>
        </HeaderStyled>
      </Col>
    </Row>
  </Container>
);

export default Header;

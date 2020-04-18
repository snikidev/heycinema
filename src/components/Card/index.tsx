import React, { FunctionComponent } from "react";
import { CinemaType } from "types";
import {
  CardStyled,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardInfo,
  CardPoster,
} from "./styles";

interface Props {
  cinema: CinemaType;
}

const Card: FunctionComponent<Props> = ({ cinema }: Props) => {
  const { Poster, Title, Website, imdbRating, Year } = cinema;
  return (
    <CardStyled>
      <CardPoster
        url={Poster && Poster !== "N/A" ? Poster : "/poster-placeholder.png"}
        data-testid="poster"
      />
      <CardInfo>
        <div>
          <CardTitle data-testid="card-title">
            {Title} ({Year})
          </CardTitle>
          {imdbRating && (
            <CardSubtitle>
              Rating: <b>{imdbRating}</b>
            </CardSubtitle>
          )}
        </div>
        {Website && Website !== "N/A" && (
          <CardLink href={Website} target="_blank" rel="noopener noreferrer">
            Go to website
          </CardLink>
        )}
      </CardInfo>
    </CardStyled>
  );
};

export default Card;

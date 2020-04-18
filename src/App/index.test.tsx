import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import user from "@testing-library/user-event";
import { withTheme } from "helpers";
import App from "./";

jest.mock("utils", () => {
  return {
    getMovies: jest.fn(() =>
      Promise.resolve({
        Title: "Star Wars: Episode IV - A New Hope",
        Year: "1977",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        imdbRating: "8.6",
        imdbID: "tt0076759",
        Website: "https://www.starwars.com/",
      })
    ),
  };
});

describe("<App />", () => {
  const ThemedComponent = withTheme(App);

  it("renders correctly with all the props", () => {
    const { container } = render(<ThemedComponent />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("searches for a movie and displays the found result", async () => {
    const { container, getByPlaceholderText, getByText, debug } = render(
      <ThemedComponent />
    );
    const searchField = getByPlaceholderText(/search/i);
    const submitButton = container.querySelector('[type="submit"]');

    user.type(searchField, "starwars");
    user.click(submitButton);

    expect(container.querySelector(".loader")).toBeInTheDocument();

    await waitForElementToBeRemoved(()=> container.querySelector(".loader")).then(() => {
      expect(getByText(/Star Wars: Episode IV - A New Hope/i)).toBeInTheDocument()
    });
  });
});

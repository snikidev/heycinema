import React from "react";
import { render } from "@testing-library/react";
import { withTheme } from "helpers";
import fixture from 'fixture'
import Card from "./";

describe("<Card />", () => {
  const ThemedComponent = withTheme(Card);

  it("renders correctly with all the props", () => {
    const { container, queryByText, getByTestId } = render(<ThemedComponent cinema={fixture[1]} />)

    expect(container.firstChild).toMatchSnapshot()
    expect(getByTestId('card-title')).toBeInTheDocument()
    expect(queryByText(/go to website/i)).toBeInTheDocument()
  });

  it("renders with placeholder if no Poster provided", () => {
    const { getByTestId} = render(<ThemedComponent cinema={fixture[7]} />)
    expect(getByTestId('poster')).toHaveStyleRule('background', 'no-repeat top/100% url(/poster-placeholder.png)')
  });

  it("renders with link if Website is provided", () => {
    const { queryByText} = render(<ThemedComponent cinema={fixture[0]} />)
    expect(queryByText(/go to website/i)).not.toBeInTheDocument()
  });
});

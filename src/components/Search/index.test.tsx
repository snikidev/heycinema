import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { withTheme } from "helpers";
import fixture from "fixture";
import Search from "./";

describe("<Card />", () => {
  const ThemedComponent = withTheme(Search);
  const defaultProps = {
    placeholder: "Search...",
    name: "search",
    onSubmit: jest.fn(() => fixture[1]),
  };

  it("renders correctly and calls onSubmit", () => {
    const { container, getByPlaceholderText, getByRole } = render(
      <ThemedComponent {...defaultProps} />
    );
    const field = getByPlaceholderText(/search/i);

    expect(container.firstChild).toMatchSnapshot();

    user.type(field, "star");
    user.click(getByRole("button"));

    expect(defaultProps.onSubmit).toHaveBeenCalledTimes(1);
    expect(defaultProps.onSubmit).toHaveBeenCalledWith("star");
  });
});

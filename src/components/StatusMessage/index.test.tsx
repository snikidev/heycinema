import React from "react";
import { render } from "@testing-library/react";
import { withTheme } from "helpers";
import StatusMessage from "./";

describe("<StatusMessage /> component", () => {
  const ThemedComponent = withTheme(StatusMessage);
  it("renders correctly", () => {
    const { container } = render(<ThemedComponent />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        color: #bdbdbd;
        font-size: 18px;
        text-align: center;
      }

      <h3
        class="c0"
      />
    `);
  });
});

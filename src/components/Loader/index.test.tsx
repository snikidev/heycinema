import React from "react";
import { render } from "@testing-library/react";
import { withTheme } from "helpers";
import Loader from "./";

describe("<Loader /> component", () => {
  const ThemedComponent = withTheme(Loader);
  it("renders correctly", () => {
    const { container } = render(<ThemedComponent />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
      }

      .c0 .line-scale-pulse-out-rapid > div {
        background-color: #834DB7;
      }

      <div
        class="loader loader-undefined loader-active c0"
      >
        <div
          class="loader-inner line-scale-pulse-out-rapid"
        >
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    `);
  });
});

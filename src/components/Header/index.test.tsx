import React from "react";
import { render } from "@testing-library/react";
import Header from "./";
import { theme } from "config";
import { withTheme } from "helpers";

describe("<Header /> component", () => {
  it("renders correctly", () => {
    const ThemedComponent = withTheme(Header);
    const { container, getByText } = render(<ThemedComponent />);

    expect(getByText(/hey/i)).toHaveStyleRule(
      "color",
      theme.colors.primary["500"]
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: white;
        padding: 1em 2em;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);
      }

      .c0 a:hover {
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c1 {
        font-weight: bold;
        line-height: 0.9em;
        font-size: 18px;
        color: #7FAAE4;
      }

      .c2 {
        font-weight: bold;
        line-height: 0.9em;
        font-size: 18px;
        color: #834DB7;
      }

      <div
        class="container-xl"
      >
        <div
          class="row"
        >
          <div
            class="col"
          >
            <header
              class="c0"
            >
              <a
                href="/"
              >
                <div
                  class="c1"
                  type="hey"
                >
                  hey
                </div>
                <div
                  class="c2"
                  type="cinema"
                >
                  cinema
                </div>
              </a>
            </header>
          </div>
        </div>
      </div>
    `);
  });
});

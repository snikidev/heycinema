import React, { ComponentType, FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../config";

export const withTheme = (
  WrappedComponent: ComponentType<any>
) => {
  const ThemedComponent: FunctionComponent<any> = (props: any) => (
    <ThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  );

  return ThemedComponent;
};
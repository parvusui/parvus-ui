/* @flow */
import * as React from "react";
import { ThemeContext } from "./ThemeContext";

type Props = {
  children: React.Node,
  theme: {
    backgroundColor?: string,
    borderRadius?: number,
    primaryColor?: string,
    secondaryColor?: string,
    tertiaryColor?: string,
    successColor?: string,
    errorColor?: string,
    warningColor?: string
  }
};

const ThemeProvider = (props: Props) => {
  const { children, theme } = props;

  const _theme = {
    backgroundColor: theme.backgroundColor || "#fff",
    borderRadius: theme.borderRadius || 0,
    primaryColor: theme.primaryColor || "blue",
    secondaryColor: theme.secondaryColor || "gray",
    tertiaryColor: theme.tertiaryColor || "white",
    successColor: theme.successColor || "green",
    errorColor: theme.errorColor || "red",
    warningColor: theme.warningColor || "orange"
  };

  return (
    <ThemeContext.Provider value={_theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

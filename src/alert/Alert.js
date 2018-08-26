/* @flow */
import * as React from "react";
import { withTheme } from "theme";
import cxs from "cxs";
import classnames from "classnames";
import { isDarkColor } from "utils/helpers";

type Props = {
  children: string | React.Node,
  className?: string,
  styles?: Object,
  theme?: Object,
  type: string,
  otherProps?: Object
};

const Alert = (props: Props) => {
  const { className, children, styles, theme, type, ...otherProps } = props;

  const _styles = cxs({
    backgroundColor: theme ? theme[type + "Color"] : "#fff",
    color: theme ? theme[type + "Color"] : "#fff",
    border: "1px solid transparent",
    borderRadius: theme ? theme.borderRadius : 0,
    color: theme
      ? isDarkColor(theme[type + "Color"])
        ? "#fff"
        : "#000"
      : "#fff",
    padding: ".75rem 1.25rem;",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: '1.5',
    width: "100%",
    textAlign: "left",
    ...styles
  });

  return (
    <div className={classnames(_styles, className)} {...otherProps}>
      {children}
    </div>
  );
};

Alert.defaultProps = {
  type: "primary"
};

export default withTheme(Alert);

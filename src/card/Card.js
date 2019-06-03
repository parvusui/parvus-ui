/* @flow */
import React, { type Node } from "react";
import { withTheme } from "../theme";
import cxs from "cxs";

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  theme?: Object,
  otherProps?: Object
};

const Card = (props: Props) => {
  const { children, className, styles, theme, ...otherProps } = props;

  const _styles = cxs({
    borderRadius: theme ? theme.borderRadius : 0,
    fontSize: "1.25rem",
    width: "100%",
    border: "0.0625rem solid #dcdcdc",
    ...styles
  });

  return (
    <div className={`${_styles} ${className || ""}`} {...otherProps}>
      {children}
    </div>
  );
};

export default withTheme(Card);

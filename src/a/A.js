/* @flow */
import * as React from "react";
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  children: string | React.Node,
  className?: string,
  styles?: Object,
  type: string,
  otherProps?: Object
};

const A = (props: Props) => {
  const { className, children, styles, type, ...otherProps } = props;

  const _styles = cxs({
    backgroundColor: "transparent",
    color: "#007bff",
    fontSize: "1rem",
    fontWeight: 400,
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline"
    },
    ":disabled": {
      opacity: 0.3
    },
    ...styles
  });

  return (
    <a className={classnames(_styles, className)} {...otherProps}>
      {children}
    </a>
  );
};

export default A;

/* @flow */
import * as React from "react";
import { withTheme } from "theme";
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  children: string | React.Node,
  className?: string,
  styles?: Object,
  otherProps?: Object
};

const Card = (props: Props) => {
  const { children, className, styles, otherProps } = props;

  const _styles = cxs({
    width: "100%",
    boxShadow:
      "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
    ...styles
  });

  return (
    <div className={classnames(_styles, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default withTheme(Card);

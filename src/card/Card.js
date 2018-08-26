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
    border: "1px solid #dcdcdc",
    ...styles
  });

  return (
    <div className={classnames(_styles, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default withTheme(Card);

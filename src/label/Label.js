/* @flow */
import * as React from "react";
import { withTheme } from "theme";
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  children: string | React.Node,
  className?: string,
  styles?: Object,
  htmlFor?: string,
  otherProps?: Object
};

const Label = (props: Props) => {
  const { children, className, htmlFor, styles, otherProps } = props;

  const _styles = cxs({
    ...styles
  });

  return (
    <label
      className={classnames(_styles, className)}
      htmlFor={htmlFor}
      {...otherProps}
    >
      {children}
    </label>
  );
};

export default withTheme(Label);

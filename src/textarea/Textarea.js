/* @flow */
import * as React from "react";
import { withTheme } from "theme";
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  children: string | React.Node,
  className?: string,
  styles?: Object,
  theme?: Object,
  value: string,
  onChange: Function,
  otherProps?: Object
};

const Textarea = (props: Props) => {
  const { className, styles, theme, value, onChange, otherProps } = props;

  const _styles = cxs({
    width: "5rem",
    height: "1.5rem",
    ...styles
  });

  return (
    <textarea
      className={classnames(_styles, className)}
      onChange={onChange}
      value={value}
      {...otherProps}
    />
  );
};

export default withTheme(Textarea);

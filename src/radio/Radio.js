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
  checked: boolean,
  onChange: Function,
  otherProps?: Object
};

const Radio = (props: Props) => {
  const {
    className,
    styles,
    theme,
    checked,
    onChange,
    otherProps
  } = props;

  const _styles = cxs({
    width: ".25rem",
    height: ".25rem",
    ...styles
  });

  return (
    <input
      className={classnames(_styles, className)}
      type="radio"
      onChange={onChange}
      checked={checked}
      {...otherProps}
    />
  );
};

export default withTheme(Radio);

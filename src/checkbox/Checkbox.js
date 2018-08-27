/* @flow */
import React from 'react';
import { withTheme } from "theme";
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  checked: boolean,
  className?: string,
  styles?: Object,
  theme?: Object,
  onChange: Function,
  otherProps?: Object
};

const Checkbox = (props: Props) => {
  const {
    checked,
    className,
    styles,
    theme,
    onChange,
    otherProps
  } = props;

  const _styles = cxs({
    borderRadius: theme ? theme.borderRadius : 0,
    width: ".8rem",
    height: ".8rem",
    ...styles
  });

  return (
    <input
      className={classnames(_styles, className)}
      type="checkbox"
      onChange={onChange}
      checked={checked}
      {...otherProps}
    />
  );
};

export default withTheme(Checkbox);

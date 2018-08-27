/* @flow */
import React from 'react';
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  className?: string,
  styles?: Object,
  checked: boolean,
  onChange: Function,
  otherProps?: Object
};

const Radio = (props: Props) => {
  const {
    className,
    styles,
    checked,
    onChange,
    otherProps
  } = props;

  const _styles = cxs({
    width: ".8rem",
    height: ".8rem",
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

export default Radio;

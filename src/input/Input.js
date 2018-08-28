/* @flow */
import React from 'react';
import { withTheme } from '../theme';
import cxs from "cxs";

type Props = {
  className?: string,
  styles?: Object,
  theme?: Object,
  type?: string,
  value: string,
  onChange: Function,
  otherProps?: Object
};

const Input = (props: Props) => {
  const { className, styles, type, theme, value, onChange, otherProps } = props;

  const _styles = cxs({
    borderRadius: theme ? theme.borderRadius : 0,
    fontFamily: theme
      ? theme.fontFamily
      : "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: '1.25rem',
    ...styles
  });

  return (
    <input
      className={`${_styles} ${className}`}
      onChange={onChange}
      value={value}
      type={type}
      {...otherProps}
    />
  );
};

Input.defaultProps = {
  type: "text"
};

export default withTheme(Input);

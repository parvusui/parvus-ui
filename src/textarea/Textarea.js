/* @flow */
import React from 'react';
import { withTheme } from "../theme";
import cxs from "cxs";
import classnames from "classnames";

type Props = {
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
    borderRadius: theme ? theme.borderRadius : 0,
    fontFamily: theme
      ? theme.fontFamily
      : "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: '1.25rem',
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

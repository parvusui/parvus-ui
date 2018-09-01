/* @flow */
import React, { type Node } from 'react';
import { withTheme } from '../theme';
import cxs from "cxs";

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  theme?: Object,
  otherProps?: Object
};

const CardContent = (props: Props) => {
  const { children, className, styles, theme, ...otherProps } = props;

  const _styles = cxs({
    backgroundColor: theme ? theme.neutralColor : "#f9f9f9",
    padding: '1.25rem',
    ...styles
  });

  return (
    <div className={`${_styles} '${className || ''}`} {...otherProps}>
      {children}
    </div>
  );
};

export default withTheme(CardContent);

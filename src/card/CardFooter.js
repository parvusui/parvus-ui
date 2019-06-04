/* @flow */
import React, { type Node } from 'react';
import { withTheme } from '../theme';
import cxs from 'cxs';

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  theme?: Object,
  otherProps?: Object
};

const CardFooter = (props: Props) => {
  const { children, className, styles, theme, ...otherProps } = props;

  const _styles = cxs({
    backgroundColor: theme ? theme.neutralColor : '#f9f9f9',
    borderTop: '0.75px solid #dcdcdc',
    padding: '.75rem 1.25rem',
    ...styles
  });

  return (
    <div className={`${_styles} ${className || ''}`} {...otherProps}>
      {children}
    </div>
  );
};

export default withTheme(CardFooter);

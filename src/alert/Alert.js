/* @flow */
import React, { type Node } from 'react';
import { withTheme } from '../theme';
import cxs from 'cxs';
import { isDarkColor } from '../utils/helpers';

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  theme?: Object,
  type: string,
  otherProps?: Object
};

const Alert = (props: Props) => {
  const { className, children, styles, theme, type, ...otherProps } = props;

  const _styles = cxs({
    backgroundColor: theme ? theme[type + 'Color'] : '#ff0000',
    border: '1px solid transparent',
    borderRadius: theme ? theme.borderRadius : 0,
    color: theme
      ? isDarkColor(theme[type + 'Color'])
        ? '#ffffff'
        : '#000000'
      : '#ffffff',
    fontFamily: theme
      ? theme.fontFamily
      : 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: '1.5',
    padding: '.75rem 1.25rem;',
    textAlign: 'left',
    width: '100%',
    ...styles
  });

  return (
    <div className={`${_styles} '${className || ''}`} {...otherProps}>
      {children}
    </div>
  );
};

Alert.defaultProps = {
  type: 'primary'
};

export default withTheme(Alert);

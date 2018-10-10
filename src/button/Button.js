/* @flow */
import React, { type Node } from 'react';
import { withTheme } from '../theme';
import cxs from 'cxs';
import { isDarkColor } from '../utils/helpers';

type Props = {
  children: string | Node,
  className?: string,
  htmlType?: string,
  styles?: Object,
  theme?: Object,
  type: string,
  otherProps?: Object
};

const Button = (props: Props) => {
  const { className, children, htmlType, styles, theme, type, ...otherProps } = props;

  const _styles = cxs({
    backgroundColor: theme ? theme[type + 'Color'] : '#000000',
    borderRadius: theme ? theme.borderRadius : 0,
    border: 0,
    color: theme
      ? isDarkColor(theme[type + 'Color'])
        ? '#ffffff'
        : '#000000'
      : '#ffffff',
    fontSize: '1.25rem',
    fontWeight: 400,
    minWidth: '6rem',
    padding: '.375rem .75rem',
    textAlign: 'center',
    ':disabled': {
      opacity: 0.3
    },
    ':focus': {
      opacity: 0.7
    },
    ':hover': {
      opacity: 0.7
    },
    ...styles
  });

  return (
    <button className={`${_styles} '${className || ''}`} type={htmlType} {...otherProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary'
};

export default withTheme(Button);

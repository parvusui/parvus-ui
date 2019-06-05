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

const MenuDropdownSubItem = (props: Props) => {
  const { className, children, styles, theme, type, ...otherProps } = props;

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
    padding: '.75rem .75rem',
    textAlign: 'left',
    display: 'block',
    zIndex: 2,
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
    <span className={`${_styles} ${className || ''}`} {...otherProps}>
      {children}
    </span>
  );
};

MenuDropdownSubItem.defaultProps = {
  type: 'primary'
};

export default withTheme(MenuDropdownSubItem);

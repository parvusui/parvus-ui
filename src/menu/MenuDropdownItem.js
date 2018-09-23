/* @flow */
import React, { type Node } from 'react';
import { withTheme } from '../theme';
import cxs from 'cxs';
import { isDarkColor } from '../utils/helpers';

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  label: string | Node,
  listStyles?: Object,
  theme?: Object,
  type: string,
  otherProps?: Object
};

const MenuDropdownItem = (props: Props) => {
  const { className, children, styles, label, listStyles, theme, type, ...otherProps } = props;

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
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block',
    zIndex: 1,
    ':disabled': {
      opacity: 0.3
    },
    ':focus': {
      opacity: 0.7
    },
    ':hover label': {
      opacity: 0.7
    },
    ':hover div': {
      display: 'block'
    },
    ...styles
  });

  const _listStyles = cxs({
    display: 'none',
    position: 'absolute',
    minWidth: '10rem',
    marginTop: '.84rem',
    ...listStyles
  });

  return (
    <div className={`${_styles} '${className || ''}`} {...otherProps}>
      <label>{label}</label>
      <div className={`${_listStyles} '${className || ''}`}>
      {children}
      </div>
    </div>
  );
};

MenuDropdownItem.defaultProps = {
  type: 'primary'
};

export default withTheme(MenuDropdownItem);

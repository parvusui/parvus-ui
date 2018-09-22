/* @flow */
import React, { type Node } from 'react';
import { withTheme } from '../theme';
import cxs from "cxs";

type Props = {
  className?: string,
  textClassName?: string,
  styles?: Object,
  theme?: Object,
  textStyles?: Object,
  tooltipText: string | Node,
  label: string | Node,
  textPosition?: string,
  otherProps?: Object
};

const getPositionStyles = (position: string) => {
  if (position === 'top') {
    return {
      width: '7.5rem',
      bottom: '100%',
      left: '50%', 
      marginLeft: '-3.75rem'
    }
  }

  if (position === 'left') {
    return {
      top: '-0.3125rem',
      right: '105%'
    }
  }

  if (position === 'bottom') {
    return {
      width: '7.5rem',
      top: '100%',
      left: '50%', 
      marginLeft: '-3.75rem'
    }
  }

  return {
    top: '-0.3125rem',
    left: '105%' 
  }
}

const Tooltip = (props: Props) => {
  const {
    className,
    textClassName,
    styles,
    theme,
    textStyles,
    tooltipText,
    label,
    textPosition,
    ...otherProps
  } = props;

  const _textStyles = cxs({
    display: 'none',
    width: '120px',
    backgroundColor: '#000000',
    color: '#ffffff',
    textAlign: 'center',
    borderRadius: theme ? theme.borderRadius : 0,
    padding: '.25rem 0',
    position: 'absolute',
    zIndex: 1,
    ...getPositionStyles(textPosition || ''),
    ...textStyles
  });

  const _styles = cxs({
    position: 'relative',
    display: 'inline-block',
    ':hover span': {
      display: 'inline',
    },
    ...styles
  });

  return (
    <div className={`${_styles} '${className || ''}`} {...otherProps}>{label}
      <span className={`${_textStyles} ${textClassName || ''}`}>{tooltipText}</span>
    </div>
  );
};

Tooltip.defaultProps = {
  position: 'right'
}

export default withTheme(Tooltip);

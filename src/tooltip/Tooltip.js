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
      bottom: '190%',
      left: '50%', 
      marginLeft: '-3.75rem',
      ':before': {
        content: '""',
        position: 'absolute',
        bottom: '-1.6rem',
        right: '40%',
        width: 0,
        height: 0,
        borderLeft: '0.8125rem solid transparent',
        borderTop: '1.625rem solid #000000',
        borderRight: '0.8125rem solid transparent'
      }
    }
  }

  if (position === 'left') {
    return {
      top: '-0.3125rem',
      right: '125%',
      ':before': {
        content: '""',
        position: 'absolute',
        left: '100%',
        top: '1rem',
        width: 0,
        height: 0,
        borderTop: '0.8125rem solid transparent',
        borderLeft: '1.625rem solid #000000',
        borderBottom: '0.8125rem solid transparent'
      }
    }
  }

  if (position === 'bottom') {
    return {
      width: '7.5rem',
      top: '190%',
      left: '50%', 
      marginLeft: '-3.75rem',
      ':before': {
        content: '""',
        position: 'absolute',
        top: '-1.6rem',
        right: '40%',
        width: 0,
        height: 0,
        borderLeft: '0.8125rem solid transparent',
        borderBottom: '1.625rem solid #000000',
        borderRight: '0.8125rem solid transparent'
      }
    }
  }

  return {
    top: '-1rem',
    left: '125%',
    ':before': {
      content: '""',
      position: 'absolute',
      right: '100%',
      top: '1rem',
      width: 0,
      height: 0,
      borderTop: '0.8125rem solid transparent',
      borderRight: '1.625rem solid #000000',
      borderBottom: '0.8125rem solid transparent'
    }
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

/* @flow */
import React, { type Node } from 'react';
import { withTheme } from "theme";
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  className?: string,
  textClassName?: string,
  styles?: Object,
  theme?: Object,
  textStyles?: Object,
  tooltipText: string | Node,
  label: string | Node,
  onHover?: boolean,
  textPosition?: string,
  otherProps?: Object
};

const getPositionStyles = (position: string) => {
  if (position === 'top') {
    return {
      width: '120px',
      bottom: '100%',
      left: '50%', 
      marginLeft: '-60px'
    }
  }

  if (position === 'left') {
    return {
      top: '-5px',
      right: '105%'
    }
  }

  if (position === 'bottom') {
    return {
      width: '120px',
      top: '100%',
      left: '50%', 
      marginLeft: '-60px'
    }
  }

  return {
    top: '-5px',
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
    onHover,
    textPosition,
    otherProps
  } = props;

  const _textStyles = cxs({
    visibility: onHover ? 'visible' : 'hidden',
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
    ...styles
  });

  return (
    <div className={classnames(_styles, className)} {...otherProps}>{label}
      <span className={classnames(_textStyles, textClassName)}>{tooltipText}</span>
    </div>
  );
};

Tooltip.defaultProps = {
  position: 'right'
}

export default withTheme(Tooltip);

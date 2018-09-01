/* @flow */
import React, { type Node } from 'react';
import { withTheme } from '../theme';
import cxs from "cxs";

type Props = {
  children: string | Node,
  bgClassName?: string,
  className?: string,
  bgStyles?: Object,
  styles?: Object,
  theme?: Object,
  otherProps?: Object
};

const Background = (props: Props) => {
  const { bgClassName, className, children, bgStyles, styles, theme, ...otherProps } = props;

  const _bgStyles = cxs({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
    backgroundColor: theme ? theme.backgroundColor : "#ffffff",
    zIndex: "-1",
    ...bgStyles
  });

  const _styles = cxs({
    fontFamily: theme
      ? theme.fontFamily
      : "Helvetica Neue, Helvetica, Arial, sans-serif",
    color: theme ? theme.color : "#000000",
    fontSize: '1.25rem',
    ...styles
  });

  return (
    <div>
      <div className={`${_bgStyles} ${bgClassName || ''}`} />
      <div className={`${_styles} '${className || ''}`} {...otherProps}>
        {children}
      </div>
    </div>
  );
};

export default withTheme(Background);

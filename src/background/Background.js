/* @flow */
import * as React from "react";
import { withTheme } from "theme";
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  children: string | React.Node,
  className?: string,
  bgStyles?: Object,
  styles?: Object,
  theme?: Object,
  otherProps?: Object
};

const Background = (props: Props) => {
  const { className, children, bgStyles, styles, theme, otherProps } = props;

  const _bgStyles = cxs({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
    backgroundColor: theme ? theme.backgroundColor : "#fff",
    zIndex: "-1",
    ...bgStyles
  });

  const _styles = cxs({
    fontFamily: theme
      ? theme.fontFamily
      : "Helvetica Neue, Helvetica, Arial, sans-serif",
    color: theme ? theme.color : "#fff",
    display: "relative",
    height: "100%",
    width: "100%",
    ...styles
  });

  return (
    <div>
      <div className={classnames(_bgStyles, className)} />
      <div {...otherProps}>{children}</div>
    </div>
  );
};

export default withTheme(Background);

/* @flow */
import React, { type Node } from 'react';
import { withTheme } from "theme";
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  theme?: Object,
  otherProps?: Object
};

const Card = (props: Props) => {
  const { children, className, styles, theme, otherProps } = props;

  const _styles = cxs({
    borderRadius: theme ? theme.borderRadius : 0,
    width: "100%",
    border: "1px solid #dcdcdc",
    ...styles
  });

  return (
    <div className={classnames(_styles, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default withTheme(Card);

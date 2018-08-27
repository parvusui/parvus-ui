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
  outerClassName?: string,
  outerStyles?: Object,
  otherProps?: Object
};

const Select = (props: Props) => {
  const { children, className, styles, theme, outerClassName, outerStyles, otherProps } = props;

  const _outerStyles = cxs({
    border: "1px solid #eeeeee",
    borderRadius: theme ? theme.borderRadius : 0,
    display: 'inline-block',
    padding: '.25rem',
    minWidth: '5rem',
    ...outerStyles
  })

  const _styles = cxs({
    backgroundColor: theme ? theme.backgroundColor : "#ffffff",
    border: 0,
    fontSize: '1rem',
    ...styles
  });

  return (
    <div className={classnames(_outerStyles, outerClassName)}>
      <select className={classnames(_styles, className)} {...otherProps}>
        {children}
      </select>
    </div>
  );
};

export default withTheme(Select);

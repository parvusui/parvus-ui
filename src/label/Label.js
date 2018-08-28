/* @flow */
import React, { type Node } from 'react';
import { withTheme } from '../theme';
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  htmlFor?: string,
  otherProps?: Object
};

const Label = (props: Props) => {
  const { children, className, htmlFor, styles, otherProps } = props;

  const _styles = cxs({
    fontSize: '1.25rem',
    ...styles
  });

  return (
    <label
      className={classnames(_styles, className)}
      htmlFor={htmlFor}
      {...otherProps}
    >
      {children}
    </label>
  );
};

export default withTheme(Label);

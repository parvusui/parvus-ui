/* @flow */
import React, { type Node } from 'react';
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  otherProps?: Object
};

const Option = (props: Props) => {
  const { children, className, styles, otherProps } = props;

  const _styles = cxs({
    fontSize: '1.25rem',
    ...styles
  });

  return (
    <option className={classnames(_styles, className)} {...otherProps}>
      {children}
    </option>
  );
};

export default Option;

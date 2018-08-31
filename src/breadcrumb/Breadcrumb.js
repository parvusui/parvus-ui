/* @flow */
import React, { type Node } from 'react';
import cxs from "cxs";

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  otherProps?: Object
};

const Breadcrumb = (props: Props) => {
  const { className, children, styles, ...otherProps } = props;

  const _styles = cxs({
    padding: 0,
    margin: 0,
    listStyle: 'none',
    ...styles
  });

  return (
    <ul className={`${_styles} '${className || ''}`} {...otherProps}>
      {children}
    </ul>
  );
};

export default Breadcrumb;

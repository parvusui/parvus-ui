/* @flow */
import React, { type Node } from 'react';
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  children: string | Node,
  className?: string,
  isOpen: boolean,
  styles?: Object,
  otherProps?: Object
};

const ModalOverlay = (props: Props) => {
  const { className, children, isOpen, styles, otherProps } = props;

  const _styles = cxs({
    display: isOpen ? 'visible' : 'none',
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    ...styles
  });

  return (
    <div className={classnames(_styles, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default ModalOverlay;

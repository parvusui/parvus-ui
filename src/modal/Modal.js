/* @flow */
import React, { type Node } from "react";
import cxs from "cxs";

type Props = {
  children: string | Node,
  className?: string,
  isOpen: boolean,
  styles?: Object,
  otherProps?: Object
};

const Modal = (props: Props) => {
  const { className, children, isOpen, styles, ...otherProps } = props;

  const _styles = cxs({
    display: isOpen ? "visible" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    ...styles
  });

  return (
    <div className={`${_styles} ${className || ""}`} {...otherProps}>
      {children}
    </div>
  );
};

export default Modal;

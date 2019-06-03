/* @flow */
import React from "react";
import { withTheme } from "../theme";
import cxs from "cxs";

type Props = {
  checked: boolean,
  className?: string,
  containerClassName?: string,
  inputClassName?: string,
  styles?: Object,
  containerStyles?: Object,
  inputStyles?: Object,
  theme?: Object,
  onChange: Function,
  otherProps?: Object
};

const Checkbox = (props: Props) => {
  const {
    checked,
    className,
    containerClassName,
    inputClassName,
    styles,
    containerStyles,
    inputStyles,
    theme,
    onChange,
    ...otherProps
  } = props;

  const _containerStyles = cxs({
    display: "block",
    position: "relative",
    paddingLeft: "1.563rem",
    height: "1.563rem",
    cursor: "pointer",
    ...containerStyles
  });

  const _inputStyles = cxs({
    position: "absolute",
    opacity: 0,
    cursor: "pointer",
    ...inputStyles
  });

  const _styles = cxs({
    backgroundColor: checked ? "#2196f3" : "#dcdcdc",
    borderRadius: theme ? theme.borderRadius : 0,
    position: "absolute",
    top: 0,
    left: 0,
    width: "1.563rem",
    height: "1.563rem",
    ":hover": {
      opacity: checked ? 1 : 0.7
    },
    ":after": {
      content: '""',
      position: "absolute",
      display: checked ? "block" : "none",
      left: "0.5625rem",
      top: "0.3125rem",
      width: "0.3125rem",
      height: "0.625rem",
      border: "solid white",
      borderWidth: "0 0.1875rem 0.1875rem 0",
      transform: "rotate(45deg)"
    },
    ...styles
  });

  return (
    <label
      className={`${_containerStyles} ${containerClassName || ""}`}
      aria-hidden
    >
      <input
        className={`${_inputStyles} ${inputClassName || ""}`}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...otherProps}
      />
      <span className={`${_styles} ${className || ""}`} />
    </label>
  );
};

export default withTheme(Checkbox);

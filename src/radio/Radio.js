/* @flow */
import React from 'react';
import cxs from "cxs";

type Props = {
  checked: boolean,
  className?: string,
  containerClassName?: string,
  inputClassName?: string,
  styles?: Object,
  containerStyles?: Object,
  inputStyles?: Object,
  onChange: Function,
  otherProps?: Object
};

const Radio = (props: Props) => {
  const {
    checked,
    className,
    containerClassName,
    inputClassName,
    styles,
    containerStyles,
    inputStyles,
    onChange,
    ...otherProps
  } = props;

  const _containerStyles = cxs({
    display: 'block',
    position: 'relative',
    paddingLeft: '25px',
    height: "25px",
    cursor: 'pointer',
    ...containerStyles
  });

  const _inputStyles = cxs({
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    ...inputStyles
  });

  const _styles = cxs({
    backgroundColor: checked ? '#2196f3' : '#dcdcdc',
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: "25px",
    height: "25px",
    zIndex: 0,
    ':hover': {
      opacity: checked ? 1 : 0.7
    },
    ':after': {
      content: '""',
      position: 'absolute',
      display: checked ? 'block' : 'none',
      top: '9px',
      left: '9px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#ffffff'
    },
    ...styles
  });

  return (
    <label className={`${_containerStyles} ${containerClassName || ''}`} aria-hidden>
      <input
        className={`${_inputStyles} ${inputClassName || ''}`}
        type="radio"
        onChange={onChange}
        checked={checked}
        {...otherProps}
      />
      <span className={`${_styles} '${className || ''}`}></span>
    </label>
  );
};

export default Radio;

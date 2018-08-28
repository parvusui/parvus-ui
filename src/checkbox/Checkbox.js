/* @flow */
import React from 'react';
import { withTheme } from '../theme';
import cxs from "cxs";
import classnames from "classnames";

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
    otherProps
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
    borderRadius: theme ? theme.borderRadius : 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: "25px",
    height: "25px",
    ':hover': {
      opacity: checked ? 1 : 0.7
    },
    ':after': {
      content: '""',
      position: 'absolute',
      display: checked ? 'block' : 'none',
      left: '9px',
      top: '5px',
      width: '5px',
      height: '10px',
      border: 'solid white',
      borderWidth: '0 3px 3px 0',
      transform: 'rotate(45deg)'
    },
    ...styles
  });

  return (
    <label className={classnames(_containerStyles, containerClassName)}>
      <input
        className={classnames(_inputStyles, inputClassName)}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...otherProps}
      />
      <span className={classnames(_styles, className)}></span>
    </label>
  );
};

export default withTheme(Checkbox);

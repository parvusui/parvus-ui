/* @flow */
import * as React from 'react';
import { withTheme } from 'theme';

type Props = {
  children: string | React.Node,
  styles?: Object,
  theme?: Object,
  type: string,
  otherProps?: Object
};

const Button = (props: Props) => {
  const { children, styles, theme, type, otherProps } = props;

  const _styles = {
    backgroundColor: theme ? theme[type + 'Color'] : '#fff',
    color: '#222',
    ...styles
  };

  return (
    <button style={_styles} {...otherProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary'
};

export default withTheme(Button);

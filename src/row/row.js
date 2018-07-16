/* @flow */
import * as React from 'react';

type Props = {
  children: string | React.Node,
  direction?: string,
  justify?: string,
  wrap?: string,
  align?: string,
  styles?: Object,
  otherProps?: Object
};

const Row = (props: Props) => {
  const {
    children,
    direction,
    justify,
    wrap,
    align,
    styles,
    otherProps
  } = props;

  const _styles = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    flexWrap: wrap,
    alignItems: align,
    ...styles
  };

  return (
    <div style={_styles} {...otherProps}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  direction: 'row',
  justify: 'space-evenly',
  wrap: 'nowrap',
  align: 'stretch'
};

export default Row;

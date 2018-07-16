/* @flow */
import * as React from 'react';
import { withTheme } from 'theme';

type Props = {
  children: string | React.Node,
  direction?: string,
  justify?: string,
  wrap?: string,
  align?: string,
  bgStyles?: Object,
  styles?: Object,
  theme?: Object,
  otherProps?: Object
};

const Container = (props: Props) => {
  const {
    children,
    direction,
    justify,
    wrap,
    align,
    bgStyles,
    styles,
    theme,
    otherProps
  } = props;

  const _bgStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    margin: '0',
    padding: '0',
    backgroundColor: theme ? theme.backgroundColor : '#fff',
    zIndex: '-1',
    ...bgStyles
  };

  const _styles = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    flexWrap: wrap,
    alignItems: align,
    height: '100%',
    width: '100%',
    color: theme ? theme.color : '#222',
    ...styles
  };

  return (
    <div>
      <div style={_bgStyles} />
      <div style={_styles} {...otherProps}>
        {children}
      </div>
    </div>
  );
};

Container.defaultProps = {
  direction: 'row',
  justify: 'space-evenly',
  wrap: 'nowrap',
  align: 'stretch'
};

export default withTheme(Container);

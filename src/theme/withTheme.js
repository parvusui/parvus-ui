/* @flow */
import React from 'react';
import themeContext from './themeContext';

const withTheme = (Component: Function) => {
  return (props: Object) => {
    return (
      <themeContext.Consumer>
        {theme => <Component {...props} theme={theme} />}
      </themeContext.Consumer>
    );
  };
};

export default withTheme;

/* @flow */
import React from 'react';
import ThemeContext from './themeContext';

const withTheme = (Component: Function) => {
  return (props: Object) => {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;

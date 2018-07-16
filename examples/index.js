import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../src/';
import TestComponent from './TestComponent';

const div = document.createElement('div');
document.body.appendChild(div);

const theme = {
  backgroundColor: '#fefefe',
  neutralColor: 'gray',
  color: '#333',
  primaryColor: 'yellow',
  secondaryColor: 'gray',
  tertiaryColor: 'white',
  successColor: 'green',
  errorColor: 'red',
  warningColor: 'orange'
};

const Example = () => (
  <ThemeProvider theme={theme}>
    <TestComponent />
  </ThemeProvider>
);

ReactDOM.render(<Example />, div);

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../src/';
import TestComponent from './TestComponent';

const div = document.createElement('div');
document.body.appendChild(div);

const theme = {
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  backgroundColor: '#fefefe',
  fontColor: '#000',
  neutralColor: '#f9f9f9',
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
  tertiaryColor: '#fff',
  successColor: '#3cb371',
  errorColor: '#ff0000',
  warningColor: '#ffa500'
};

const Example = () => (
  <ThemeProvider theme={theme}>
    <TestComponent />
  </ThemeProvider>
);

ReactDOM.render(<Example />, div);

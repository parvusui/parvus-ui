import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../src/';
import TestComponent from './TestComponent';

document.documentElement.lang = 'en';
const div = document.createElement('div');
document.body.appendChild(div);

const theme = {
  backgroundColor: '#fefefe',
  neutralColor: '#f9f9f9',
  primaryColor: '#0275d8',
  secondaryColor: '#6c757d',
  tertiaryColor: '#fefefe',
  successColor: '#3cb371',
  errorColor: '#c9302c',
  warningColor: '#ffa500',
  fontColor: '#000000',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
};

const Example = () => (
  <ThemeProvider theme={theme}>
    <TestComponent />
  </ThemeProvider>
);

ReactDOM.render(<Example />, div);

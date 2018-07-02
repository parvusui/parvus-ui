import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../src/';

const div = document.createElement('div');
document.body.appendChild(div);

const Example = () => (
  <Test />
);

ReactDOM.render(<Example />, div);

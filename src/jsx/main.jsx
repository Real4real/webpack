import "./additional.jsx";

import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Josh Perez';
const element = <h1>Hello, {name} <p> from the root1  </p></h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

console.log("hello, world");


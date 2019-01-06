import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
    <p> from the root2  </p>
  </h1>
  
);

ReactDOM.render(
  element,
  document.getElementById('root2')
);
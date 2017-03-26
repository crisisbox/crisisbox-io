// Application entrypoint.

// Load up the application styles
require('./styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import content from './content'

ReactDOM.render(
  <App content={content} />,
  document.getElementById('root')
);

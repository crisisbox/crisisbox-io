// Application entrypoint.

// Load up the application styles
require('./styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import content from './content'
import { StyleRoot, Style } from 'radium';
import typography from './styles/base/typography';

ReactDOM.render(
  <StyleRoot style={typography}>
    <Style rules={typography} />
    <App content={content} />
  </StyleRoot>,
  document.getElementById('root')
);

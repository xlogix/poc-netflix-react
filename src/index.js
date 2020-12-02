import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
require('./stylesheet/main.scss');
require('./components/home/style.scss')

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
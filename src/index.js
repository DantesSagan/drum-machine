import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Actions from './actions/actions';
import './styles/app.css';

ReactDOM.render(
  <App>
    <Actions isChecked={true} />
  </App>,
  document.getElementById('root')
);

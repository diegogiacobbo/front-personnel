import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const header = document.createElement('header');
  const footer = document.createElement('footer');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<App />, header);
  ReactDOM.render(<App />, footer);
  ReactDOM.unmountComponentAtNode(div);
  ReactDOM.unmountComponentAtNode(header);
  ReactDOM.unmountComponentAtNode(footer);
});

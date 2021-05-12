import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const DATA = [
  { id: 'todo-0', name: 'Eat', completed: true },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false },
];

ReactDOM.render(
  <div>
    <App tasks={DATA} />
  </div>,
  document.getElementById('root')
);

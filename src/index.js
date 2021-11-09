import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const DATA = [
  { "name": "Eat", "completed": true, "id": "todo-1" },
  { "name": "Sleep", "completed": false, "id": "todo-2" },
  { "name": "Repeat", "completed": false, "id": "todo-3" }
]
ReactDOM.render(
  <React.StrictMode>
    <App data={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

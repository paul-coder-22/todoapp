import React, { useState } from 'react';
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import './App.css';

function App({ data }) {

  const [tasks, setTasks] = useState(data);

  function addTask(name) {
    alert(name);
  }

  const taskList = (data.map((v, i) =>
    <Todo
      key={i}
      name={v.name}
      completed={v.completed}
      id={v.id} />
  ))
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div >
  );
}

export default App;
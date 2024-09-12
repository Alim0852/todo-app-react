import React, { useState, useRef } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [todo, setTodo] = useState([]);
  const todoVal = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    if (todoVal.current.value.trim()) {
      setTodo([...todo, todoVal.current.value]);
      todoVal.current.value = "";
    }
  };

  const deleteTodo = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  const editTodo = (index) => {
    const editedVal = prompt("Enter new value", todo[index]);
    if (editedVal) {
      const newTodo = todo.map((item, i) => (i === index ? editedVal : item));
      setTodo(newTodo);
    }
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Enter todo" ref={todoVal} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => editTodo(index)}>Edit</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newTask = { id: Date.now(), text: inputValue };
    setTodos([...todos, newTask]);
    setInputValue("");
  };

  const handleDelete = (idToRemove) => {
    setTodos(todos.filter((todo) => todo.id !== idToRemove));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-state">No tasks yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span>{todo.text}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;

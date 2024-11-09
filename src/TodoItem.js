// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => (
  <div>
    <h2>{todo.title}</h2>
    <p>{todo.details}</p>
    <p>Due: {todo.dueDate}</p>
    <button onClick={() => onEdit(todo)}>Edit</button>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </div>
);

export default TodoItem;

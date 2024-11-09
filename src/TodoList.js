// src/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEdit }) => (
  <div>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    ))}
  </div>
);

export default TodoList;

import React, { useState, useEffect } from 'react';

const TodoForm = ({ onSave, todo, onCancel }) => {
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [details, setDetails] = useState(todo ? todo.details : '');
  const [dueDate, setDueDate] = useState(todo ? todo.dueDate : '');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDetails(todo.details);
      setDueDate(todo.dueDate);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(title, details, dueDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Details" 
        value={details} 
        onChange={(e) => setDetails(e.target.value)} 
      />
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default TodoForm;  // Ensure it is exported

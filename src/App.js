import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';  // Correctly import TodoForm

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleAddTodo = (title, details, dueDate) => {
    setTodos([
      ...todos,
      { id: Date.now(), title, details, dueDate }
    ]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    setIsEditing(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTodos = todos.filter(todo => 
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>To-Do List</h1>
      
      {/* Search input */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearch}
      />
      
      {/* Button to add a new task */}
      <button onClick={() => setIsEditing(true)}>Add Task</button>

      {/* Todo form modal */}
      {isEditing && (
        <TodoForm
          onSave={(title, details, dueDate) => {
            if (currentTodo) {
              handleEditTodo({ ...currentTodo, title, details, dueDate });
            } else {
              handleAddTodo(title, details, dueDate);
            }
            setCurrentTodo(null);
          }}
          todo={currentTodo}
          onCancel={() => {
            setIsEditing(false);
            setCurrentTodo(null);
          }}
        />
      )}

      {/* Todo list component */}
      <TodoList
        todos={filteredTodos}
        onDelete={handleDeleteTodo}
        onEdit={(todo) => {
          setCurrentTodo(todo);
          setIsEditing(true);
        }}
      />
    </div>
  );
};

export default App;

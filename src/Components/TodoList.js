import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList(props) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = { id: id, text: text, completed: false, important: false }
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
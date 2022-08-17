import React, { memo, useCallback, useMemo, useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoMain = () => {

  const [todos, setTodos] = useState([]);
  const [taskNumber, setTaskNumber] = useState(0);
  const [taskOpen, setTaskOpen] = useState(0);
  const [taskComlete, setTaskComlete] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const addTodo = useCallback(text => {
    if (!text || /(\B(\?\?|\?)|\B(!!|!)|\B(\[\])|\b(RWC)|\b(TODO))[:;.,-]?\d*($|\s.*$|\(.*$)/gmi.test(text)) {
      setErrorMessage('Invalid todo!');
      return;
    }
    else
      setErrorMessage('');
    const id = Math.floor(Math.random() * 10000);
    const todo = { id: id, text: text, completed: false, important: false }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setTaskNumber((prev) => prev + 1);
  }, [todos]);

  useMemo(() => {
    const completedTask = todos.filter(props => props.completed).length;
    setTaskComlete(completedTask);
    const taskopen = taskNumber - completedTask;
    setTaskOpen(taskopen);
  }, [todos, taskNumber]);

  const removeTodo = useCallback(id => {
    const data = todos.filter(item => item.id !== id);
    setTodos(data);
    setTaskNumber((prev) => prev - 1);
  }, [todos]);

  const completeTodo = useCallback(id => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(updatedTodos);
    const completedTask = todos.filter(props => props.completed).length;
    setTaskComlete(completedTask);
    const taskopen = taskNumber - completedTask;
    setTaskOpen(taskopen);
  }, [todos, taskNumber]);

  const importantTodo = useCallback(id => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.important = !todo.important;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }, [todos]);

  return (
    <div className="add-todo mx-4 mt-6">
      <TodoForm addTodo={addTodo} />
      <p className="text-[14px] ml-2 text-red-600" >{errorMessage}</p>
      <div className="ml-1 my-6 h-96 overflow-auto">
        <ul>
          { todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
                importantTodo={importantTodo}
                todo={todo}
              />
            )
          })}
        </ul>
        {!taskNumber && (<p className="caught-up my-16 text-lg text-center text-gray-500" >You're all caught up!</p>)}
      </div>
      <div className="-mx-4 px-4 h-12 text-sm bg-gray-300 border-t border-gray-400 flex flex-wrap items-center text-gray-600">
        <p className="flex-1 order-1">{taskNumber} tasks</p>
        <p className="flex-1 order-2 text-center" >{taskComlete} complete</p>
        <p className="flex-1 order-last text-right" >{taskOpen} open</p>
      </div>
    </div>
  );
}

export default memo(TodoMain);
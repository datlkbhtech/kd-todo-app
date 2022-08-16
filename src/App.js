import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [tasknumber, setTasknumber] = useState(0);
  const [taskOpen, setTaskOpen] = useState(0);
  const [taskComlete, setTaskComlete] = useState(0)

  const addTodo = useCallback(text => {
    if (!text || /^\s*$/.test(text)) {
      alert('Can\'t add empty todo');
      return;
    }
    const id = Math.floor(Math.random() * 10000);
    const todo = { id: id, text: text, completed: false, important: false }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setTasknumber((prev) => prev + 1);
  }, [todos]);

  useMemo(() => {
    const completedTask = todos.filter(props => props.completed).length
    setTaskComlete(completedTask);
    const taskopen = tasknumber - completedTask;
    setTaskOpen(taskopen);
  }, [todos, tasknumber])

  const removeTodo = useCallback(id => {
    const data = todos.filter(item => item.id !== id);
    setTodos(data);
    setTasknumber((prev) => prev - 1);
  }, [todos]);

  const completeTodo = useCallback(id => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    setTodos(updatedTodos);
    const completedTask = todos.filter(props => props.completed).length
    setTaskComlete(completedTask);
    const taskopen = tasknumber - completedTask;
    setTaskOpen(taskopen);
  }, [todos, tasknumber]);

  const importantTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  
  return (
    <div className="bg-slate-300">
      <div className="flex flex-col container w-4/6 mx-auto md:pt-8">
        <section>
          <div className="flex flex-col bg-gray-200 shadow-lg">
            <Header />
            <div className="add-todo mx-4 mt-6">
              <TodoForm addTodo={addTodo} />
            </div>
            <div className="mx-4 my-6 h-96 overflow-auto">
              <ul>
                {todos.map((todo) => {
                  return (
                    <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id} />
                  )
                })}
              </ul>
              {!tasknumber && (<p className="caught-up my-16 text-lg text-center text-gray-500" >You're all caught up!</p>)}
            </div>
            <div className="px-4 h-12 text-sm bg-gray-300 border-t border-gray-400 flex flex-wrap items-center text-gray-600">
              <p className="flex-1 order-1">{tasknumber} tasks</p>
              <p className="flex-1 order-2 text-center" >{taskComlete} complete</p>
              <p className="flex-1 order-last text-right" >{taskOpen} open</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
import React, { useCallback, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text || /^\s*$/.test(text)) {
      return;
    }
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = { id: id, text: text, completed: false, important: false }
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

    const removeTodo = useCallback(id => {
    const data = todos.filter(item => item.id !== id);
    setTodos(data);
  }, [todos]);

  const completeTodo = useCallback(id => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }, [todos]);

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
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
            <div className="addTodo mx-4 mt-6">
              <TodoForm addTodo={addTodo} />
            </div>
            <div className="mx-4 my-6 h-96 overflow-auto">
              {todos.map((todo) => {
                return (
                  <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id} />
                )
              })}
              <p className="caught-up my-16 text-lg text-center text-gray-500" >You're all caught up!</p>
            </div>
            <div className="px-4 h-12 text-sm bg-gray-300 border-t border-gray-400 flex flex-wrap items-center text-gray-600">
              <p className="flex-1 order-1"> tasks</p>
              <p className="flex-1 order-2 text-center" >0 complete</p>
              <p className="flex-1 order-last text-right" >0 open</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
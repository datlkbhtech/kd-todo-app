import React from 'react'

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo, importantTodo } = props
  return (
    <ul className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "orange" } : {}}>
      <li className="iconsContainer flex justify-between space-x-1 py-3 px-2.5 border-b border-gray-300 transition duration-300 ease-in no-underline text-gray-800">
        <span>
          <input onClick={() => completeTodo(todo.id)} name="completed-checkbox" type="checkbox" className="form-checkbox rounded text-pink-600 shadow-none focus:shadow-none focus:ring-0 focus:ring-offset-0 focus:outline-none"></input>
          {todo.text}
        </span>
        <span>
          <button onClick={() => importantTodo(todo.id)} className="important-btn">!</button>
          <button style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}>delete</button>
          <button onClick={() => completeTodo(todo.id)}>complete</button>
        </span>
      </li>
    </ul>
  )
}
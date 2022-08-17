import React, { memo } from 'react'

const TodoItem=({ todo, removeTodo, completeTodo, importantTodo })=> {
  return (
    <li className={todo.completed ? " complete" : ""} style={todo.important ? { background: "orange" } : {}}>
      <div className="icon-container flex justify-between items-center space-x-1 py-1.5 px-2  border-b border-gray-300 transition duration-300 ease-in no-underline text-gray-800">
        <span className='flex justify-start'>
          <input  onClick={() => completeTodo(todo.id)} type="checkbox" className="w-[16px] mr-3 form-checkbox rounded text-pink-600 shadow-none focus:shadow-none focus:ring-0 focus:ring-offset-0 focus:outline-none"></input>
          <span className='text-[18px]'>{todo.text}</span>
        </span>
        <span className='flex'>
          <button onClick={() => importantTodo(todo.id)} className="important-btn text-red-500 mr-1.5 w-3.5 rounded-full border-rose-500 text-[9px]">!</button>
          <button class=" transition duration-200 ease-in-out text-gray-400 hover:text-pink-500 focus:outline-none" onClick={() => removeTodo(todo.id)} >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
            </svg>
          </button>
        </span>
      </div>
    </li>
  )
}
export default memo(TodoItem);
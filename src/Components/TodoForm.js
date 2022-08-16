import React, { useState } from "react";


export default function TodoForm(props) {
  
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input)
    setInput("")
  }

  return (
    <form className=" todo-form flex items-center py-2 border-b-2 border-gray-300 focus-within:border-b-2 focus-within:border-pink-600" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input flex-1 px-2.5 bg-gray-200 placeholder-gray-500 focus:outline-none"
        placeholder="Add task..."
      />
      <button type="submit" className="text-gray-400 focus:outline-none hover:text-pink-500 text-lg px-2 cursor-pointer">Add Todo</button>
    </form>
  );
}
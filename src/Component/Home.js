import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((oldTodos) => {
      return [...oldTodos, { id: uuidv4(), todo }];
    });
  };
  const removeData = (id) => {
    const filteredData = todos.filter((todo) => todo.id !== id);
    setTodos(filteredData);
  };
  return (
    <div className="bg-black flex flex-col justify-center items-center border-2 border-red-500 py-4 pb-80 p-4 md:p-10 rounded-[20px]">
      <h1 className="text-2xl text-white font-bold pb-4">Modern Todo App</h1>
      <NewTodo handleAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveData={removeData} />
    </div>
  );
};

export default Home;

import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo({ title: "", desc: "" });
    props.handleAddTodo(todo);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <div className="bg-[#dc0000] w-full flex justify-center items-center mb-4 rounded-md">
        <label htmlFor="title" className="text-white text-[20px] px-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          className="py-2 w-[80%] pl-2 rounded-md"
        />
      </div>

      <div className="bg-[#dc0000] w-full flex justify-center items-center mb-4  rounded-md">
        <label htmlFor="desc" className="text-white text-[20px] px-2">
          Desc
        </label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={handleChange}
          className="py-2 w-[80%] pl-2 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="text-white border-2 border-red-500 rounded-md px-4 py-2 my-2 font-bold tracking-widest"
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;

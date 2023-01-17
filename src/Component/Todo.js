import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleClick = (id) => {
    props.onRemoveData(id);
  };
  return (
    <article className=" bg-white w-full flex justify-between items-center p-3 text-black border-2 border-red-500 my-2 rounded-md px-2 space-x-10">
      <div>
        <h3 className="font-bold">{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button
          onClick={() => {
            handleClick(id);
          }}
          className="bg-[#0a2647] text-white p-4 rounded-md border-2 border-red-200"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </article>
  );
};

export default Todo;

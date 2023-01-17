import React from "react";
import Todo from "./Todo";
const Todos = (props) => {
  return (
    <section>
      {props.todos.map((todo) => (
        <Todo todo={todo.todo} id={todo.id} onRemoveData={props.onRemoveData} />
      ))}
    </section>
  );
};

export default Todos;

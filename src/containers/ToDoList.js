import React from "react";
import { connect } from "react-redux";
import ToDo from "../containers/ToDo";

const ToDoList = ({ todos }) => {
  const displayToDos = todos.map((todo) => {
    return <ToDo {...todo} key={todo.id} />;
  });

  const list = <ul>{displayToDos}</ul>;

  const displayHandler = displayToDos.length ? list : '';

  return (
   displayHandler
  );
};

const maptStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(maptStateToProps)(ToDoList);

<<<<<<< HEAD
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
=======
import React from 'react';
import { connect } from 'react-redux';

const ToDoList = ({ todos }) => {
    const displayTodos = todos.map(todo => {
      return (
        <Todo
          {...todo}
          key={todo.id}
        />
      )
    })
  
    return (
      <ul>
        {displayTodos}
      </ul>
    )
  }
  
  const mapStateToProps = state => ({
    todos: state.todos
  });
  
  export default connect(mapStateToProps)(ToDoList);
>>>>>>> adc9608cc4e201574bdb7c0c3ad412279bb77f5f

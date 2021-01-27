<<<<<<< HEAD
import React, { Component } from "react";
import AddTodoForm from "../containers/AddTodoForm";
import ToDoList from "../containers/ToDoList";
=======
import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
>>>>>>> adc9608cc4e201574bdb7c0c3ad412279bb77f5f

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;

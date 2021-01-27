<<<<<<< HEAD:src/containers/AddTodoForm.js
import React, { Component } from 'react'
import { addToDo } from '../actions'
import { connect } from 'react-redux'
=======
import React, { Component } from 'react';
import { addToDo } from '../actions';
import { connect } from 'react-redux';
>>>>>>> adc9608cc4e201574bdb7c0c3ad412279bb77f5f:src/components/AddTodoForm.js

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault()
<<<<<<< HEAD:src/containers/AddTodoForm.js
    this.props.addToDo(this.state.todo)
=======
    this.props.addToDo(this.state.todo);
>>>>>>> adc9608cc4e201574bdb7c0c3ad412279bb77f5f:src/components/AddTodoForm.js
    this.setState({ todo: '' });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.todo}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD:src/containers/AddTodoForm.js
  addToDo: todo => dispatch(addToDo(todo))
})
=======
  addToDo: text => dispatch( addToDo(text) )
}) 
>>>>>>> adc9608cc4e201574bdb7c0c3ad412279bb77f5f:src/components/AddTodoForm.js

export default connect(null, mapDispatchToProps)(AddTodoForm);

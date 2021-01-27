import React from 'react';
import { markCompleted } from '../actions';
import { connect } from 'react-redux';

const ToDo = ({id, todo, completed, markCompleted}) => {
  return(
    <li
    className={completed ? 'completed' : 'not-completed'}
    onClick={() => markCompleted(id)}
    >{todo}</li>
  )
}

const mapDispatchToProps = dispatch => ({
  markCompleted: id => dispatch(markCompleted(id))
})

export default connect(null, mapDispatchToProps)(ToDo);
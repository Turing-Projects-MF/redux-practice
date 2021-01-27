export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), todo: action.todo, completed: false },
      ];
<<<<<<< HEAD
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (action.id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
=======
>>>>>>> adc9608cc4e201574bdb7c0c3ad412279bb77f5f
    default:
      return state;
  }
};

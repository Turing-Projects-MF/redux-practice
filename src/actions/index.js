export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const markCompleted = id => ({
  type: 'TOGGLE_TODO',
  id
})
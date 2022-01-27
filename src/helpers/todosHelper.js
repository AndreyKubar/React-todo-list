import { createSelector } from 'reselect';

export const isNotChecked = (todos = []) => todos.find(todo => !todo.isCompleted)

export const filterByStatus = (todos = [], status = '', id = '') => {
  switch (status) {
    case 'ACTIVE':
      return todos.filter(todo => !todo.isCompleted)
    case 'COMPLETED':
      return todos.filter(todo => todo.isCompleted)
    case 'REMOVE':
      return todos.filter(todo => todo.id !== id)
    default:
      return todos;
  }
}


// const getTodos = (state) => state.todos 

// const getStatus = (state) => state.status 

// const getId = (state) => state.id 

// export const filterByStatus = createSelector(
//   [getTodos, getStatus, getId],
//   (todos, status, id) => {

//     switch (status) {
//       case 'ACTIVE':
//         return todos.filter(todo => !todo.isCompleted)
//       case 'COMPLETED':
//         return todos.filter(todo => todo.isCompleted)
//       case 'REMOVE':
//         return todos.filter(todo => todo.id !== id)
//       default:
//         return todos;
//     }

//   },
// )






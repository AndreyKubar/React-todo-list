import React from 'react';
import {Provider} from 'react-redux'
import store from './store'

import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


const isNotChecked = (todos = []) => todos.find(todo => !todo.isCompleted)

const filterByStatus = (todos = [], status = '', id = '') => {
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

class App extends React.Component {
  // state = {
  //   todosList: [],
  //   todoEditId: '',
  //   isChecked: false,
  //   status: 'ALL'
  // }

  // componentWillMount() {
  //   this.setState({
  //     isChecked: !isNotChecked(this.state.todosList)
  //   })
  // }

  // addTodo = (todo = {}) => {
  //   this.setState(preState => ({
  //     todosList: [...preState.todosList, todo]
  //   }))
  //   console.log(todo);
  // }

  // getTodoEditId = (id = '') => {
  //   this.setState({ todoEditId: id})
  // }

  // onEditTodo = (todo = {}, index = -1) => {
  //   if (index >= 0) {
  //     const {todosList: list} = this.state
  //     list.splice(index, 1, todo)
  //     this.setState({
  //       todosList: list,
  //       todoEditId: '',
  //       isNotChecked: false,
  //     })
  //   }
  // }

  // todoCompleted = (id = '') => {
  //   const {todosList} = this.state
  //   const updateList = todosList.map(todo => todo.id === id ? ({...todo, isCompleted: !todo.isCompleted}) : todo)
  //   this.setState(preState => ({
  //     todosList: updateList,
  //     isChecked: !isNotChecked(updateList)
  //   }))
  // }

  // checkAllTodos = () => { 
  //   const {todosList, isChecked} = this.state
  //   this.setState(preState => ({
  //     todosList: todosList.map(todo => ({...todo, isCompleted: !isChecked})),
  //     isChecked: !preState.isChecked
  //   }))
  // }

  // setStatusFilter = (status = '') => {
  //   this.setState({
  //     status
  //   })
  // } 

  // clearCompleted = () => {
  //   const {todosList} = this.state
  //   this.setState({
  //     todosList: filterByStatus(todosList, 'ACTIVE')
  //   })
  // }

  // removeTodo =(id = '') => {
  //   const {todosList} = this.state
  //   this.setState({
  //     todosList: filterByStatus(todosList, 'REMOVE', id)
  //   })
  // }


  render () {

    // const { todosList, todoEditId, isChecked, status } = this.state
    return (
      <Provider store={store}>
        <div className="todoapp">

          <Header
            // addTodo={this.addTodo}
            // isChecked={isChecked}

          />
          <TodoList
            // todosList={filterByStatus(todosList, status)}
            // getTodoEditId={this.getTodoEditId}
            // todoEditId={todoEditId}
            // onEditTodo={this.onEditTodo}
            // todoCompleted={this.todoCompleted}
            // isChecked={isChecked}
            // checkAllTodos={this.checkAllTodos}
            // removeTodo={this.removeTodo}
          />
          <Footer
            // setStatusFilter={this.setStatusFilter}
            // status={status}
            // clearCompleted={this.clearCompleted}
            // numOfTodos={todosList.length}
            // numOfTodosLeft={filterByStatus(todosList, 'ACTIVE').length}
          />

        </div>
      </Provider>

    );
  }
  

} 


export default App;
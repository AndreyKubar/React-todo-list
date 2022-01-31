import React, { useState } from "react"
import { TodoList } from "./TodoList"
import { v4 as uuidv4 } from "uuid"

export const TodoForm = ({
  todo,
  todos,
  addTask,
  deletTask,
  deletAllTask,
  updateTask,
  toggleTask,
  toggleAllTaskComplete,
  toggleAllTaskUncomplete,
  setTodo,
  filter,
}) => {

  const todoLeft = todos.filter((item) => item.completed === false)

  const [isCompleted, changeCompleted] = useState(true)

  const onAllCompleted = () => {
    changeCompleted(!isCompleted)
    if (isCompleted) {
      toggleAllTaskComplete()
      return
    }
    toggleAllTaskUncomplete()
  }

  const inputChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    addTask(uuidv4(), todo)
    setTodo("")
    e.preventDefault();
  }

  const showAll = () => {
    filter('all')
  }

  const showActive = () => {
    filter('active')
  }

  const showCompleted = () => {
    filter('completed')
  }

  const onClear = () => {
    const deleted = todos.map((item) => {
      if (item.completed === true) {
        return item
      }
    })
    deletAllTask(deleted)
  }

  return (
    <div className="todo-form">
      <div className="todo-form__input">
        <button className="compliteAllBtn" onClick={onAllCompleted}>❯</button>
        <form onSubmit={handleSubmit}>
          <input
            required placeholder=""
            type="text"
            value={todo}
            onChange={inputChange}
            className="todoInput"
          />
        </form>
      </div>
      <div className="todo-form__list">
        <TodoList
          todos={todos}
          deletTask={deletTask}
          updateTask={updateTask}
          toggleTask={toggleTask}
        />
      </div>
      <div className="todo-form__filters">
        <div className="filter-info">
          Items left: {todoLeft.length} 
        </div>
        <div className="filter-btn">
          <div>
            <button className="btn" onClick={showAll}>Все</button>
          </div>
          <div>
            <button className="btn" onClick={showActive}>Активные</button>
          </div>
          <div>
            <button className="btn" onClick={showCompleted}>Завершенные</button>
          </div>
        </div>
        <div className="filter-clear">
          <button className="btn" onClick={onClear}>Удалить завершенные</button>
        </div>
      </div>
    </div>
  )
}
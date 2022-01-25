import React, {memo, useState} from "react";
import {
    getTodoEditId,
    onEditTodo,
    todoCompleted,
    removeTodo,
} from './../store/actions'

import {connect} from 'react-redux'


const Todo = memo(props => {

    const {
        todo, 
        getTodoEditId, 
        todoEditId, 
        onEditTodo, 
        index, 
        todoCompleted, 
        removeTodo,
    } = props
    const [text, setText] = useState(todo.text)
    const isEdit = todoEditId === todo.id
    const editTodo = () => {
        onEditTodo({
            ...todo,
            text
        }, index)
    }
    return (
        <li className={`${isEdit ? 'editing' : ''} ${todo.isCompleted ? 'completed' : ''} `}>
            {!isEdit ?
                <div className="view">
                <input 
                    className="toggle" 
                    type='checkbox'
                    checked={todo.isCompleted} 
                    onChange={() => todoCompleted(todo.id)}
                />
                <label onDoubleClick={() => getTodoEditId(todo.id)}>{todo.text}</label>
                <button className="destroy" onClick={() => removeTodo(todo.id)}></button>
            </div> : 
            <input 
                className="edit" 
                type='text'
                value={text}
                onChange={e => setText(e.target.value)}
                onBlur={editTodo}
                onKeyPress={(e) => {
                    if(e.key === 'Enter') {
                        editTodo()
                    }
                }}
            />
            }
        </li>
    )
})

const mapStateToProps = (state, ownProps) => {
    return {
        todoEditId: state.todos.todoEditId,
        ...ownProps
    }
}

const mapDispatchToProps = {
    getTodoEditId,
    onEditTodo,
    todoCompleted,
    removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
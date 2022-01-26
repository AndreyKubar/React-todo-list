import {
    ADD_TODO,
    GET_TODO_EDIT_ID,
    ON_EDIT_TODO,
    CHECK_ALL_TODOS,
    TODO_COMPLETED,
    REMOVE_TODO,
    SET_STATUS_FILTER,
    CLEAR_COMPLETED
} from './../actions'

import { isNotChecked, filterByStatus } from '../../helpers/todosHelper'



const INITIAL_STATE = {
    todosList: [],
    todoEditId: '',
    isChecked: false,
    status: 'ALL'
}

const todosRedcers = (state = INITIAL_STATE, action) => {
    const {todosList, isChecked} = state
    const list = JSON.parse(JSON.stringify(todosList))
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todosList: [...list, action.todo]
            })
        case GET_TODO_EDIT_ID:
            return Object.assign({}, state, {
                todoEditId: action.id
            })
        case ON_EDIT_TODO:
            if (action.index >= 0) {
                list.splice(action.index, 1, action.todo)
              }
            return Object.assign({}, state, {
                todosList: list,
                todoEditId: ''
            })
        case TODO_COMPLETED:
            const updateList = todosList.map(todo => 
                todo.id === action.id ? ({...todo, isCompleted: !todo.isCompleted}) : todo)
            return Object.assign({}, state, {
              todosList: updateList,
              isChecked: !isNotChecked(updateList)

            })

        case CHECK_ALL_TODOS:
            return Object.assign({}, state, {
                todosList: todosList.map(todo => ({...todo, isCompleted: !isChecked})),
                isChecked: !isChecked
            })

        case REMOVE_TODO:
            return Object.assign({}, state, {
                todosList: filterByStatus(todosList, 'REMOVE', action.id)

            })

        case SET_STATUS_FILTER:
            return Object.assign({}, state, {
                status: action.status
            })
        
        case CLEAR_COMPLETED:
            return Object.assign({}, state, {
              todosList: filterByStatus(todosList, 'ACTIVE')
            })
            
        default:
            return state
    }
} 

export default todosRedcers
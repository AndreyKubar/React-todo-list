import {combineReducers} from 'redux'
import todosRedcers from './todosReducers'


export default combineReducers({
    todos: todosRedcers
})
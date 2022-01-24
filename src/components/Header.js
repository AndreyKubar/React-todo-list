import React, {memo, useState} from "react";

const Header = memo(props => {
    const [text, setText] = useState('')
    const {addTodo, isChecked} = props
    const onAddTodo = (e = {}) => {
        if (e.key === 'Enter' && text) {
            console.log(text);
            addTodo({
                id: new Date().valueOf(),
                text,
                isCompleted: false
            })
            setText('')
        }
    }

    return(
        <header className="header">
            <h1>TODO LIST</h1>
            <input 
                className="new-todo" 
                value={text}
                onChange={(e) => setText(e.target.value)} 
                onKeyPress={(e) => onAddTodo(e)}
                checked={isChecked}

            />
        </header>
    )
})

export default Header;
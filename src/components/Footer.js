import React, {memo} from "react";

const Footer = memo(props => {
    const {status, setStatusFilter, numOfTodosLeft, numOfTodos, clearCompleted} = props
    const filterBtns = [{
        title: 'Все',
        isActived: status === 'ALL',
        onClick: () => setStatusFilter('ALL'),
        link: ''
    },
    {
        title: 'Активные',
        isActived: status === 'ACTIVE',
        onClick: () => setStatusFilter('ACTIVE'),
        link: 'active'
    },
    {
        title: 'Выполненые',
        isActived: status === 'COMPLETED',
        onClick: () => setStatusFilter('COMPLETED'),
        link: 'completed'
    }]
    return (
        <footer className="footer">
            <span className="todo-count">
                <span> </span>
                <span>{numOfTodosLeft <= 1 ? 'Task ' : 'Tasks '}</span>
                <span>left: </span>
                <strong>{numOfTodosLeft}</strong>

            </span>
            <ul className="filters">
                {
                    filterBtns.map(btn => (
                        <FilterBtn 
                            key={`btn${btn.title}`} 
                            {...btn} 

                        />
                    )) 
                }
            </ul>
            {numOfTodos > numOfTodosLeft &&<button className="clear-completed" onClick={clearCompleted}>Удалить выполненые</button>}
        </footer>
    )
})

const FilterBtn = memo(props => {
    const {title, onClick, link, isActived} = props
    return (
        <>
            <li>
                <a
                    href={`#/${link}`}
                    className={`${isActived ? 'selected' : ''}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
            <span></span>
        </>
    )
})

export default Footer;
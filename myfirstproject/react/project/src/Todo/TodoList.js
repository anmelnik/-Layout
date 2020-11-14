import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const style = {
    ul: {
        listStyle: 'none',
        margin: 0 ,
        padding: 0,
    }
}

function TodoList(props) {
    return (
        <ul style={style.ul}>
            {props.todo.map((e, i) => {
                return <TodoItem todo={e} key={e.id} index={i} onChange={props.onToggle}/>
            })}
        </ul>
    )
}

TodoList.propTypes={
    todo: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}


export default TodoList

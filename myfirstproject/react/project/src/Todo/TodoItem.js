import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const style = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChange }) {
    const {removeTodo} = useContext(Context)
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return (
    <li style={style.li}> 
        <span className={classes.join('')}>
            <input 
            type='checkbox'
            checked={todo.completed}
            style={style.input}
            onChange={()=> onChange(todo.id)}
            />
            <strong>{index+ 1}</strong>
            {todo.title}
        </span>
        <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
    )
}

TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem
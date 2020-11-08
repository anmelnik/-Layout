import PropTypes from 'prop-types'
import React, {useState} from 'react'

function useInputValue(defaltValue = '') {
   const [value, setValue] = useState(defaltValue)
  

   return {
           value,
           onChange: event => setValue(event.target.value)
       }
    }  


function AddTodo({onCreate}) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value.trim()) {
            onCreate(input.value)
        }
    }

    return (
    <form style={{marginBottom:'1rem'}} onSubmit={submitHandler}>
        <input {...input} />
        <button type="submit">Add Todo</button>
    </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}



export default AddTodo
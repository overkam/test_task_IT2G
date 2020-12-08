import {useState} from 'react'
import PropTypes from "prop-types";

function AddTodo( {onCreateTodo}) {
  const [inputValue, setInputValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()

    if (inputValue.trim()) {
      onCreateTodo(inputValue)
      setInputValue('')
    }
  }

  return(
    <form onSubmit={submitHandler}>
      <input value={inputValue} onChange={event => setInputValue(event.target.value)} />
      <button type='submit'>Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreateTodo: PropTypes.func.isRequired
}

export default AddTodo
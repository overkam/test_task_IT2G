function FilterTodos({filterTodos}) {

  function buttonHandler(event) {
    event.preventDefault()
    filterTodos(event.target.id)
  }

  return (
    <div>
    <button onClick={buttonHandler} id='all' >Show all</button>
      <button onClick={buttonHandler} id='unfulfilled' >Show unfulfilled</button>
      <button onClick={buttonHandler} id='completed' >Show completed</button>
    </div>
  )
}

export default FilterTodos
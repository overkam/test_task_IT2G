import React from "react";
import "./TodoList.css";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList(props) {

  function renderTodos() {
    let result
    switch (props.filter) {
      case "completed":
        result = props.todos.filter(todo => todo.completed)
        break;
      case "unfulfilled":
        result = props.todos.filter(todo => !todo.completed)
        break;
      case "all":
        result = props.todos.filter(todo => todo.completed || !todo.completed)
        break;
      default:
        result = props.todos.filter(todo => todo.completed || !todo.completed)
        break;
    }
    
    return result.map((item, i) => {
      return (
        <TodoItem
          key={item.id}
          item={item}
          onChange={props.onSwitch}
        />
      );
    })
  }
  return (
    <ul>
    {renderTodos()}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default TodoList;

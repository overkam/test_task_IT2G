import React, {useContext} from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";
import { NavLink } from "react-router-dom";
import Context from "../context";

function TodoItem({ item, index, onChange }) {
  const {removeTodo, showDescription} = useContext(Context)
  const classes = [];

  if (item.completed) {
    classes.push("todo-item-done");
  }

  function onShowDescription(event) {
    showDescription(+event.target.id)
  }

  return (
    <li className="todo-item">
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onChange(item.id)}
        />
        <strong>{index + 1}</strong>
        {item.title}
      </span>
      <NavLink to={`/description/${item.id}`} onClick={onShowDescription} id={item.id}>Read more</NavLink>
      <button className='delete-btn' onClick={removeTodo.bind(null, item.id)} >Delete</button>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;

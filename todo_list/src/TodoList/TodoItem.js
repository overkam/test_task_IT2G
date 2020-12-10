import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";
import { NavLink } from "react-router-dom";
import Context from "../context";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoItem({ item, onChange }) {
  const { removeTodo, showDescription } = useContext(Context);
  const classes = [];

  if (item.completed) {
    classes.push("todo-item-done");
  }

  function onShowDescription(event) {
    showDescription(+event.target.id);
  }

  return (
    <li className={`todo-item ${classes.join(" ")}`} id={item.id}>
      <span>
        <Checkbox
          defaultChecked
          color="primary"
          checked={item.completed}
          onChange={() => onChange(item.id)}
          className="todo-item-checkbox"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <NavLink
          to={`/description/${item.id}`}
          onClick={onShowDescription}
          id={item.id}
          className="todo-item-link"
        >
          {item.title}
        </NavLink>
      </span>
      <IconButton
        aria-label="delete"
        className="delete-btn"
        onClick={removeTodo.bind(null, item.id)}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;

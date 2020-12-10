import "./AddTodo.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function AddTodo({ onCreateTodo }) {
  const [inputTitleValue, setInputTitleValue] = useState("");
  const [inputDescriptionValue, setInputDescriptionValue] = useState("");

  const useStyles = makeStyles({
    taskName: {
      margin: "0 0 10px",
    },
    taskDescription: {
      margin: "0 0 10px",
    },
    button: {
      width: "150px",
      height: "40px",
      position: "absolute",
      right: 0,
      top: "130px",
    },
  });

  const classes = useStyles();

  function submitHandler(event) {
    event.preventDefault();

    if (inputTitleValue.trim() && inputDescriptionValue.trim()) {
      onCreateTodo(inputTitleValue, inputDescriptionValue);
      setInputTitleValue("");
      setInputDescriptionValue("");
    }
  }

  return (
    <form onSubmit={submitHandler} className="add-form">
      <TextField
        id="outlined-basic"
        className={classes.taskName}
        label="Write your task"
        variant="outlined"
        value={inputTitleValue}
        onChange={(event) => setInputTitleValue(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        className={classes.taskDescription}
        label="Describe your task"
        variant="outlined"
        value={inputDescriptionValue}
        onChange={(event) => setInputDescriptionValue(event.target.value)}
      />
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="secondary"
      >
        Add Todo
      </Button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreateTodo: PropTypes.func.isRequired,
};

export default AddTodo;

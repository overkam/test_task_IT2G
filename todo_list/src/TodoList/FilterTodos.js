import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PropTypes from "prop-types";

function FilterTodos({ filterTodos }) {
  const useStyles = makeStyles({
    form: {
      margin: '10px 0 10px',
      width: "150px",
    },
    filter: {
      textAlign: "center",
    },
  });

  const classes = useStyles();

  function buttonHandler(event) {
    event.preventDefault();
    filterTodos(event.target.value);
  }

  return (
    <FormControl className={classes.form}>
      <InputLabel classname={classes.filter}>Filter todos</InputLabel>
      <Select
        onChange={buttonHandler}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="unfulfilled">Unfulfilled</MenuItem>
      </Select>
    </FormControl>
  );
}

FilterTodos.propTypes = {
  filterTodos: PropTypes.func.isRequired,
};

export default FilterTodos;

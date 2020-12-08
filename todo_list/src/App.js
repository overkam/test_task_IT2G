import { useState } from "react";
import "./App.css";
import Context from "./context";
import AddTodo from "./TodoList/AddTodo";
import FilterTodos from "./TodoList/FilterTodos";
import Description from "./Description/Description";
import TodoList from "./TodoList/TodoList";
import { Route, Switch } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      completed: false,
      title: "Feed the cat",
      description: "aaaaaaaaaa",
    },
    {
      id: 2,
      completed: false,
      title: "Feed the dog",
      description: "bbbbbbbbbbb",
    },
    {
      id: 3,
      completed: false,
      title: "Feed the cow",
      description: "ccccccccc",
    },
  ]);

  const [filter, setFilter] = useState("");

  const [description, setDescription] = useState(null);



  function switchTodo(id) {
    setTodos(
      todos.map((item) => {
        if (id === item.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          title,
          completed: false,
          description: "ddddddddd",
        },
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function filterTodos(value) {
    setFilter(value);
  }

  function showDescription(id) {
    todos.forEach(element => {
      if (element.id === id) {
        setDescription(element.description)}
    });
  }

  return (
    <Context.Provider value={{ removeTodo, showDescription }}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="App">
              <h1>TODO List</h1>
              <AddTodo onCreateTodo={addTodo} />
              <FilterTodos filterTodos={filterTodos} />
              {todos.length ? (
                <TodoList todos={todos} onSwitch={switchTodo} filter={filter} />
              ) : (
                <p>No todos, do you want to add?</p>
              )}
            </div>
          )}
        />
        <Route path="/description" render={() => <Description description={description} />} />
      </Switch>
    </Context.Provider>
  );
}

export default App;

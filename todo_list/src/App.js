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
      description: "I love baking pie. You already know this. But this wasn’t always the case. Up until 4 years ago, baking pie from scratch was foreign to me. Something for the bakeries, certainly not me. Pie crust? Forget about it. Homemade filling? Nope. It’s all too complicated and scary. But guess what? Baking pie is nothing to fear. In fact, after having lots of practice, I now think of baking pie as my own little cheap therapy session. Something about mixing that pie dough by hand, rolling it all out, making cute pie crust designs, and smelling that glorious fresh-baked pie in the oven is therapeutic for me. It’s my me time and something I enjoy doing just because. No other baked good gives me the content satisfaction that pie does. Plus it tastes pretty awesome no matter which flavor is on the menu. (Apple Pie, anyone?!) And that’s why I wanted to share this cherry pie recipe with you. Out of all pie flavors and varieties, I feel like cherry pie is where most depend on canned filling. Which is certainly delicious and convenient! But that’s the challenge– making it with fresh cherries.",
    },
    {
      id: 2,
      completed: false,
      title: "Feed the dog",
      description: "I love baking pie. You already know this. But this wasn’t always the case. Up until 4 years ago, baking pie from scratch was foreign to me. Something for the bakeries, certainly not me. Pie crust? Forget about it. Homemade filling? Nope. It’s all too complicated and scary. But guess what? Baking pie is nothing to fear. In fact, after having lots of practice, I now think of baking pie as my own little cheap therapy session. Something about mixing that pie dough by hand, rolling it all out, making cute pie crust designs, and smelling that glorious fresh-baked pie in the oven is therapeutic for me. It’s my me time and something I enjoy doing just because. No other baked good gives me the content satisfaction that pie does. Plus it tastes pretty awesome no matter which flavor is on the menu. (Apple Pie, anyone?!) And that’s why I wanted to share this cherry pie recipe with you. Out of all pie flavors and varieties, I feel like cherry pie is where most depend on canned filling. Which is certainly delicious and convenient! But that’s the challenge– making it with fresh cherries.",
    },
    {
      id: 3,
      completed: false,
      title: "Feed the cow",
      description: "I love baking pie. You already know this. But this wasn’t always the case. Up until 4 years ago, baking pie from scratch was foreign to me. Something for the bakeries, certainly not me. Pie crust? Forget about it. Homemade filling? Nope. It’s all too complicated and scary. But guess what? Baking pie is nothing to fear. In fact, after having lots of practice, I now think of baking pie as my own little cheap therapy session. Something about mixing that pie dough by hand, rolling it all out, making cute pie crust designs, and smelling that glorious fresh-baked pie in the oven is therapeutic for me. It’s my me time and something I enjoy doing just because. No other baked good gives me the content satisfaction that pie does. Plus it tastes pretty awesome no matter which flavor is on the menu. (Apple Pie, anyone?!) And that’s why I wanted to share this cherry pie recipe with you. Out of all pie flavors and varieties, I feel like cherry pie is where most depend on canned filling. Which is certainly delicious and convenient! But that’s the challenge– making it with fresh cherries.",
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

  function addTodo(title, description) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          title,
          completed: false,
          description,
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
    debugger
    todos.forEach((element) => {
      if (element.id === id) {
        setDescription(element.description);
      }
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
              <div className='App-header'>
                <AddTodo onCreateTodo={addTodo} />
                <FilterTodos filterTodos={filterTodos} />
              </div>
              {todos.length ? (
                <TodoList todos={todos} onSwitch={switchTodo} filter={filter} />
              ) : (
                <p>No todos, do you want to add?</p>
              )}
            </div>
          )}
        />
        <Route
          path="/description"
          render={() => <Description description={description} />}
        />
      </Switch>
    </Context.Provider>
  );
}

export default App;

import React, { useContext } from "react";
import { toggleTodo } from "../store/todos/actions";
import TodoList from "../components/TodoList";
import { VisibilityFilterType } from "../store/visibilityFilter/types";
import StoreContext from "../store/StoreContext";
import { TodoType } from "../store/todos/types";

const getVisibleTodos = (todos: TodoType[], filter: VisibilityFilterType) => {
  switch (filter) {
    case VisibilityFilterType.SHOW_ALL:
      return todos;
    case VisibilityFilterType.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilterType.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const VisibleTodoList = () => {
  const [{ todos, visibilityFilter }, dispatch] = useContext(StoreContext);
  return (
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      toggleTodo={id => dispatch(toggleTodo(id))}
    />
  );
};

export default VisibleTodoList;

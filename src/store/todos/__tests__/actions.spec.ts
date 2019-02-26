import { addTodo, toggleTodo } from "../actions";
import { TodoActionType } from "../types";

describe("todo actions", () => {
  it("addTodo should create ADD_TODO action", () => {
    const todoText = "Use React Hooks";
    expect(addTodo(todoText)).toEqual({
      type: TodoActionType.ADD_TODO,
      todo: {
        id: 0,
        text: todoText,
        completed: false
      }
    });
  });

  it("toggleTodo should create TOGGLE_TODO action", () => {
    expect(toggleTodo(1)).toEqual({
      type: TodoActionType.TOGGLE_TODO,
      id: 1
    });
  });
});

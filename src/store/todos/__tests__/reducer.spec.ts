import { todosReducer } from "../reducer";
import { TodoActionType } from "../types";

const todo1 = {
  text: "Run the tests",
  id: 0,
  completed: false
};

const todo2 = {
  text: "Use React Hooks",
  id: 1,
  completed: false
};

describe("todos reducer", () => {
  it("should handle initial state", () => {
    expect(todosReducer([], {})).toEqual([]);
  });

  describe("should handle ADD_TODO", () => {
    it("in empty list", () => {
      expect(
        todosReducer([], {
          type: TodoActionType.ADD_TODO,
          todo: todo1
        })
      ).toEqual([todo1]);
    });

    it("in non-empty list", () => {
      const todoList = [todo1];
      expect(
        todosReducer(todoList, {
          type: TodoActionType.ADD_TODO,
          todo: todo2
        })
      ).toEqual([...todoList, todo2]);
    });
  });

  describe("should handle TOGGLE_TODO", () => {
    describe("when ID is present", () => {
      it("set false to true", () => {
        const toggleTodoId = 5;
        const toggleTodo = { ...todo1, id: toggleTodoId, completed: false };
        expect(
          todosReducer([toggleTodo], {
            type: TodoActionType.TOGGLE_TODO,
            id: toggleTodoId
          })
        ).toEqual([{ ...toggleTodo, completed: true }]);
      });

      it("set true to false", () => {
        const toggleTodoId = 5;
        const toggleTodo = { ...todo1, id: toggleTodoId, completed: true };
        expect(
          todosReducer([toggleTodo], {
            type: TodoActionType.TOGGLE_TODO,
            id: toggleTodoId
          })
        ).toEqual([{ ...toggleTodo, completed: false }]);
      });
    });

    it("when ID is not present", () => {
      const toggleTodoId = 5;
      expect(
        todosReducer([], {
          type: TodoActionType.TOGGLE_TODO,
          id: toggleTodoId
        })
      ).toEqual([]);
    });
  });
});

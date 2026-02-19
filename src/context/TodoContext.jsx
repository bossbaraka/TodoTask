import { createContext, useReducer, useEffect } from "react";

export const TodoContext = createContext();

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  history: JSON.parse(localStorage.getItem("history")) || [],
  maxActive: 6,
  filter: "all",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const activeCount = state.todos.filter((t) => !t.completed).length;

       // user = 6 
      if (activeCount >= state.maxActive) {
        return state;
      }

      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      

      return {
        ...state,
        todos: [...state.todos, newTodo],
        history: [
          ...state.history,
          {
            ...newTodo,
            action: "added",
            time: new Date().toISOString(),
          },
        ],
      };
    }

    case "DELETE": {
      const removedTodo = state.todos.find((t) => t.id === action.payload);

      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
        history: [
          ...state.history,
          {
            ...removedTodo,
            action: "deleted",
            time: new Date().toISOString(),
          },
        ],
      };
    }

    case "TOGGLE": {
      const updatedTodos = state.todos.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t,
      );

      return {
        ...state,
        todos: updatedTodos,
        history: [
          ...state.history,
          {
            id: action.payload,
            action: "toggled",
            time: new Date().toISOString(),
          },
        ],
      };
    }

    case "UPDATE": {
      const updatedTodos = state.todos.map((t) =>
        t.id === action.payload.id ? { ...t, title: action.payload.title } : t,
      );

      return {
        ...state,
        todos: updatedTodos,
        history: [
          ...state.history,
          {
            id: action.payload.id,
            action: "updated",
            newTitle: action.payload.title,
            time: new Date().toISOString(),
          },
        ],
      };
    }
    case "removeAll":
      return {
        ...state,
        todos: [],
        history:[...state.history,{id:action.payload,action:"removed All item",time:new Date().toISOString()}]

      }
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // 🔥 حفظ تلقائي في LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
    localStorage.setItem("history", JSON.stringify(state.history));
  }, [state.todos, state.history]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

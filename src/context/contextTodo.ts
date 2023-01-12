import React, { createContext, Dispatch, ReactNode, useReducer } from "react";

//리듀서 액션타입 정의 필요
type Todo ={
    title : string,
    content: string,
    id: string,
}
type TodosState = Todo[]
// type Action ={type: "ADD"; title: string; content:string;} | {type:"DELETE"; }
const todoReducer = (state: TodosState, action:any) => {
  switch (action.type) {
    case "INIT":
      return [...action.initTodo];
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state?.filter((item) => item.id !== action.id);
    case "EDIT":
      return state?.map((item) => (item.id === action.payload.id ? { ...action.payload } : item));
    default:
      return state;
  }
};

type TodoDispatch = Dispatch<any>
export const DispatchContext = createContext<TodoDispatch | null>(null);
export const TodoContext = createContext<TodosState | null>(null);

const init = [];

const TodoContextWrap = ({children}:{children:React.ReactNode}) :JSX.Element=> {
  const [todos, dispatch] = useReducer(todoReducer, init);
  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
      {children}
       </DispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export default TodoContextWrap;

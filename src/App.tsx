import React from "react"
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";

function App():JSX.Element{
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  )
}

export default App

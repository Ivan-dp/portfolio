import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter, Projects, TodoList, About } from "../../pages";

const MyRoutes = () => {
  return (
    <div className="MyRoutes">
      <div className="container">
        <Routes>
          <Route path="/portfolio" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </div>
  );
};

export { MyRoutes };

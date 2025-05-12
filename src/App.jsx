import React from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import TasksPage from "./pages/TasksPage/TasksPage";
import Contact from "./pages/Contact";
import TaskContent from "./components/TaskContent/TaskContent";


export default function App() {
  
  return (
    <HashRouter>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:taskId" element={<TaskContent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

function NavigationMenu() {
  return (
    <nav className="navigation">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/tasks">Задачи</NavLink>
      <NavLink to="/contact">Контакты</NavLink>
    </nav>
  );
}

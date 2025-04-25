import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import Tasks from "./pages/Tasks";
import Contact from "./pages/Contact";
import TasksComponent from "./components/Tasks/TasksComponent";
import TaskContent from "./components/TaskContent/TaskContent";


export default function App() {
  return (
    <BrowserRouter>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:taskId" element={<TaskContent/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function NavigationMenu() {
  return (
    <nav className = 'navigation'>
      <NavLink  to="/">Главная</NavLink>
      <NavLink to="/tasks">Задачи</NavLink>
      <NavLink to="/contact">Контакты</NavLink>
    </nav>
  );
}

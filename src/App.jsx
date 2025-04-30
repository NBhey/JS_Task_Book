import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import TasksPage from "./pages/TasksPage";
import Contact from "./pages/Contact";
import TaskContent from "./components/TaskContent/TaskContent";


export default function App() {
  
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''}>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:taskId" element={<TaskContent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
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

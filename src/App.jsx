import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <NavigationMenu />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

function NavigationMenu() {
  return (
    <nav>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/tasks">Задачи</NavLink>
    </nav>
  );
}

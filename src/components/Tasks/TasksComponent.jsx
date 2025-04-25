import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import loadingGif from './loading.gif'
import "./TasksComponent.css";

const TasksComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 700);
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://nbhey.ru/tasks.json"
        );
        const data = await response.json();
        setTasks(data.tasksArray);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();

  }, []);
  console.log(tasks);

  if (loading) return <div className="loading">Загрузка <img style={{width:"45px",padding:"20px 5px 0"}} src={loadingGif} alt="GIF"></img></div>;
  return (

    <ul className="content">
      {tasks.map((el) => {
        return <li style={{display:"inline"}}><NavLink  to={`/tasks/${el.theme}`}>{`${el.themeRU}`}</NavLink></li>;
      })}
    </ul>
  );
};

export default TasksComponent;

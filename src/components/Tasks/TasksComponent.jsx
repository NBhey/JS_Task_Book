import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import loadingGif from "./loading.gif";
import "./TasksComponent.css";

import { useSelector } from "react-redux";

const TasksComponent = () => {
  const isLoading = !tasks;

  const tasks = useSelector((state) => state.request.tasksArray);
 

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let timer = setTimeout(() => {
      document.body.style.overflow = "";
    }, 700);

    return (()=>{
      clearTimeout(timer)
    })
  }, []);

  if (!isLoading)
    return (
      <div className="loading">
        Загрузка{" "}
        <img
          style={{ width: "45px", padding: "20px 5px 0" }}
          src={loadingGif}
          alt="GIF"
        ></img>
      </div>
    );
  return (
    <ul className="content">
      {tasks.map((el) => {
        return (
          <li style={{ display: "inline" }}>
            <NavLink to={`/tasks/${el.theme}`} code={el.code}>{`${el.themeRU}`}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default TasksComponent;

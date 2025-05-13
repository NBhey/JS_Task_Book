import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadTasks } from "../../store/actions/tasks";
import loadingGif from "./loading.gif";
import "./TasksComponent.css";

const TasksComponent = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.request.tasksArray);

  useEffect(() => {
    dispatch(loadTasks());
    
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "";
    }, 700);

    return () => clearTimeout(timer);
  }, [dispatch]);

  if (!tasks || tasks.length === 0) {
    return (
      <div className="loading">
        Загрузка
        <img
          style={{ width: "45px", padding: "20px 5px 0" }}
          src={loadingGif}
          alt="Loading"
        />
      </div>
    );
  }

  return (
    <ul className="content">
      {tasks.map((el) => (
        <li key={el.theme} style={{ display: "inline" }}>
          <NavLink to={`/tasks/${el.theme}`} state={{ code: el.code }}>
            {el.themeRU}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TasksComponent;
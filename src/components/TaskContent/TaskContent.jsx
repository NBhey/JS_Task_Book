import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadTasks } from "../../store/actions/tasks";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.min.css";
import "./TaskContent.css";

const TaskContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { taskId } = useParams();
  const { tasksArray } = useSelector((state) => state.request);

  useEffect(() => {
    if (tasksArray.length === 0) {
      dispatch(loadTasks());
    }
  }, [dispatch, tasksArray.length]);

  const task = tasksArray.find((t) => t.theme === taskId);

  useEffect(() => {
    if (tasksArray.length > 0 && !task) {
      navigate("/tasks");
    }
  }, [task, tasksArray, navigate]);

  useEffect(() => {
    if (task?.code) {
      Prism.highlightAll();
    }
  }, [task]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => console.log("Код скопирован!"))
      .catch((err) => console.error("Ошибка при копировании:", err));
  };

  if (!task) return <div className="loading">Загрузка задачи...</div>;

  return (
    <div className="task-content">
      <h2 className="task-content__title">{task.themeRU}</h2>
      <ul className="task-list">
        {task.code.map((code, index) => (
          <pre key={index} className="code-block">
            <button
              onClick={() => copyToClipboard(code)}
              className="copy-button"
              title="Копировать в буфер"
            >
              📋
            </button>
            <code className="language-javascript">{code}</code>
          </pre>
        ))}
      </ul>
    </div>
  );
};

export default TaskContent;
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.min.css";
import "./TaskContent.css";

const TaskContent = () => {
  let codeArray;
  let titleName;
  const taskId = useParams().taskId;
  const tasks = useSelector((state) => state.request.tasksArray);

  console.log(tasks);
  for (let task of tasks) {
    if (task.theme === taskId) {
      titleName = task.themeRU;
      codeArray = task.code.map((el) => el);
    }
  }
  console.log(codeArray);
  const copyToClipboard = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        // Можно добавить уведомление об успешном копировании
        console.log("Код скопирован!");
      })
      .catch((err) => {
        console.error("Ошибка при копировании: ", err);
      });
  };
  useEffect(() => {
    Prism.highlightAll();
  }, [codeArray]);

  return (
    <div className="task-content">
      <h2 className="task-content__title">{titleName}</h2>
      <ul className="task-list">
        {codeArray.map((el, index) => (
          <pre key={index} className="code-block">
            <button
              onClick={() => copyToClipboard(el)}
              className="copy-button"
              title="Копировать в буфер"
            >
              📋
            </button>
            <code className="language-javascript">{el}</code>
          </pre>
        ))}
      </ul>
    </div>
  );
};

export default TaskContent;

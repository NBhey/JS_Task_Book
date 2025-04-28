import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TaskContent = () => {
    const id = useParams().taskId

    const tasks = useSelector((state) => state.request.tasksArray); 
    let codeArray

    for (let task of tasks){
        if(task.theme === id) {
            codeArray = task.code.map((el) => el)
        }
    }
    console.log(codeArray)
//   const { taskId } = useParams(); // Получаем параметр из URL
//   console.log(taskId)
  return (
    <div className="task-content">
      <h2>Задача: {id}</h2>
      <ul>
        {codeArray.map((el) => {
            return <li>
                {el}
            </li>
        })}
      </ul>
    </div>
  );
};

export default TaskContent;
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "./TaskContent.css";

const TaskContent = () => {
    const { taskId } = useParams();
    const tasks = useSelector((state) => state.request.tasksArray);
    
    const currentTask = tasks.find(task => task.theme === taskId);
    
    React.useEffect(() => {
        Prism.highlightAll();
    }, [currentTask]);

    if (!currentTask) {
        return <div className="task-content">Задача не найдена</div>;
    }

    return (
        <div className="task-content">
            <h2>Задача: {currentTask.themeRU}</h2>
            <div className="code-list">
                {currentTask.code.map((codeSnippet, index) => (
                    <div key={index} className="code-item">
                        <pre>
                            <code className="language-javascript">
                                {formatCode(codeSnippet)}
                            </code>
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Функция для форматирования кода
const formatCode = (code) => {
    return code
        .replace(/;/g, ';\n')  // Перенос после точек с запятой
        .replace(/{/g, '{\n')  // Перенос после открывающих скобок
        .replace(/}/g, '\n}')  // Перенос перед закрывающими скобок
        .replace(/\) => /g, ') =>\n'); // Перенос после стрелок
};

export default TaskContent;
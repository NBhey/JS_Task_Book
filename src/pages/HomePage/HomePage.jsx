import React, { useEffect } from "react";
import "./HomePage.css";

export default function HomePage() {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   setTimeout(() => {
  //     document.body.style.overflow = "";
  //   }, 1500);
  // }, []);

  return (
    <div className="welcome-container">
      <h1> Тренажер JavaScript </h1>
      <section className="welcome-description">
        <p>Добро пожаловать в сборник практических задач по JavaScript!</p>
        <div className="features">
          <h3>Как это работает: </h3>
          <ul>
            <li>
              🧩 Большинство задач представлено в формате{" "}
              <strong>"Что выведет консоль?</strong>
            </li>
            <li>📋 Копируйте код прямо из задания (клик по блоку кода)</li>
            <li>🔍 Вставляйте в консоль браузера или IDE для проверки</li>
            {/* <li>💡 Не получается? Нажмите "Показать ответ" для пояснения</li> */}
          </ul>
        </div>
        <div className="quick-start">
          <h3>С чего начать:</h3>
          <ol>
            <li>Выберите тему из меню "Задачи"</li>
            <li>Попробуйте решить задачу самостоятельно</li>
            <li>Проверьте свое понимание через консоль</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

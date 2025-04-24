import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="welcome-container">
        <h1> Тренажер JavaScript </h1>
        <section className="welcome-description">
            <p>Добро пожаловать в сборник практических задач по JavaScript!</p>
            <div className="features">
                <h3>Как это работает: </h3>
                <ul>
                    <li>🧩 Большинство задач представлено в формате <strong>"Что выведет консоль?</strong></li>
                    <li>📋 Копируйте код прямо из задания (клик по блоку кода)</li>
                    <li>🔍 Вставляйте в консоль браузера или IDE для проверки</li>
                    <li>💡 Не получается? Нажмите "Показать ответ" для пояснения</li>
                </ul>
            </div>
        </section>
    </div>
    // <p className="main-text">
    //   Привет! Данный сборник задач создан для того чтобы лучше разобраться в
    //   языке JavaScript. Большинство задач представлено в виде "Что выведет
    //   консоль?". Чтоб узнать ответ вам достаточно скопировать задачу и пренести
    //   ее в консоль или IDE.
    // </p>
  );
}

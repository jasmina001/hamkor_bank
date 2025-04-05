import React from "react";
import "./App.css";
import YearFilter from "./components/YearFilter";
import ReportList from "./components/ReportList";

function App() {
  return (
    <div className="container">
      <h1>Отчеты</h1>
      <YearFilter />
      <ReportList />
      <div className="cookie">
        Мы используем файлы cookie. <button>Принять</button>
      </div>
    </div>
  );
}

export default App;

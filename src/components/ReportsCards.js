// src/components/ReportsCards.js

import React from 'react';
import './ReportsCards.css';

const reportsData = [
  { id: 1, title: 'Отчет за 2023 год', description: 'Описание отчета за 2023 год' },
  { id: 2, title: 'Отчет за 2022 год', description: 'Описание отчета за 2022 год' },
  { id: 3, title: 'Отчет за 2021 год', description: 'Описание отчета за 2021 год' },
  { id: 4, title: 'Отчет за 2020 год', description: 'Описание отчета за 2020 год' },
  { id: 5, title: 'Отчет за 2019 год', description: 'Описание отчета за 2019 год' },
  { id: 6, title: 'Отчет за 2018 год', description: 'Описание отчета за 2018 год' },
  { id: 7, title: 'Отчет за 2017 год', description: 'Описание отчета за 2017 год' },
  { id: 8, title: 'Отчет за 2016 год', description: 'Описание отчета за 2016 год' },
];

const ReportsCards = () => {
  return (
    <div className="reports-container">
      {reportsData.map((report) => (
        <div className="report-card" key={report.id}>
          <h3 className="report-title">{report.title}</h3>
          <p className="report-description">{report.description}</p>
          <button className="report-button">Скачать</button>
        </div>
      ))}
    </div>
  );
};

export default ReportsCards;

// src/components/ReportsCards.js

import React, { useState } from 'react';
import './ReportsCards.css';

const ReportsCards = () => {
  const initialReports = [
    { id: 1, title: 'Отчет за 2023 ', description: 'Описание отчета за 2023 ' },
    { id: 2, title: 'Отчет за 2022 ', description: 'Описание отчета за 2022 год' },
    { id: 3, title: 'Отчет за 2021 год', description: 'Описание отчета за 2021 год' },
    { id: 4, title: 'Отчет за 2020 год', description: 'Описание отчета за 2020 год' },
    { id: 5, title: 'Отчет за 2019 год', description: 'Описание отчета за 2019 год' },
    { id: 6, title: 'Отчет за 2018 год', description: 'Описание отчета за 2018 год' },
    { id: 7, title: 'Отчет за 2017 год', description: 'Описание отчета за 2017 год' },
    { id: 8, title: 'Отчет за 2016 год', description: 'Описание отчета за 2016 год' },
    { id: 9, title: 'Отчет за 2015 год', description: 'Описание отчета за 2015 год' },
  ];

  const [reports, setReports] = useState(initialReports);

  const loadMoreReports = () => {
    const newReports = [
      { id: 10, title: 'Отчет за 2014 год', description: 'Описание отчета за 2014 год' },
      { id: 11, title: 'Отчет за 2013 год', description: 'Описание отчета за 2013 год' },
      { id: 12, title: 'Отчет за 2012 год', description: 'Описание отчета за 2012 ' },
    ];
    setReports((prevReports) => [...prevReports, ...newReports]);
  };

  return (
    <div className="reports-container">
      {reports.map((report) => (
        <div className="report-card" key={report.id}>
          <h3 className="report-title">{report.title}</h3>
          <p className="report-description">{report.description}</p>
          <a href="#" className="report-button">
            <i className="fas fa-download"></i>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ReportsCards;

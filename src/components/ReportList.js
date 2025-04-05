import ReportCard from "./ReportCard";

const reports = [
  { title: "Отчет за II квартал 2024 года", size: "440 Kb" },
  { title: "Годовой отчет за 2023 год", size: "895 Kb" },
  { title: "Отчет за I квартал 2024 года", size: "399 Kb" },
];

function ReportList() {
  return (
    <div className="report-list">
      {reports.map((report, index) => (
        <ReportCard key={index} {...report} />
      ))}
    </div>
  );
}

export default ReportList;

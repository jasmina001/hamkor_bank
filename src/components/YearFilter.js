const years = ["2024", "2023", "2022", "2021", "2020"];

function YearFilter() {
  return (
    <div className="filter">
      <button className="all">Все</button>
      {years.map((year) => (
        <button key={year}>{year}</button>
      ))}
    </div>
  );
}

export default YearFilter;

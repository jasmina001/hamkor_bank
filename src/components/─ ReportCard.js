function ReportCard({ title, size }) {
    return (
      <div className="card">
        <p className="title">{title}</p>
        <p className="size">PDF, {size}</p>
        <span className="download">⬇</span>
      </div>
    );
  }
  
  export default ReportCard;
  


export default function EduInfo({data}) {
  const currentMonth = new Date().toISOString().slice(0, 7);
  const isPresent = (endAt) => !endAt || endAt.slice(0, 7) >= currentMonth;
  const formatMonthYear = (value) => {
    if (!value) return "";
    const [year, month] = value.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, 1)).toLocaleString("en-US", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  };
  return (
    <section className="cv-card" aria-labelledby="experience-heading">
      <h2 className="section-heading" id="experience-heading">
        Education experience
      </h2>
      <div className="experience-list">
        {data.eduExp.map((exp) => (
          <article className="experience-item" key={exp.id}>
            <h3 className="experience-company">{exp.school}</h3>
            <p className="experience-role">{exp.title}</p>
            <p className="experience-startAt">
              
              {isPresent(exp.period) ? "Present" : formatMonthYear(exp.period)}
            </p>
           
          </article>
        ))}
       
      </div>
    </section>
  )
}

export default function ProInfo({ data }) {
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
        Work experience
      </h2>
      <div className="experience-list">
        {data.workExp.map((exp) => (
          <article className="experience-item" key={exp.id}>
            <h3 className="experience-company">{exp.company}</h3>
            <p className="experience-startAt">
              {formatMonthYear(exp.startAt)} –{" "}
              {isPresent(exp.endAt) ? "Present" : formatMonthYear(exp.endAt)}
            </p>
            <p className="experience-role">{exp.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

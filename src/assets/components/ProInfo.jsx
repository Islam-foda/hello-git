export default function ProInfo({ data }) {
  const proWork = data.workExp.map((exp) => (
    <>
      <section id="center">
        <h2>Work Experience</h2>
        <p>
          <strong>{exp.company}</strong> 
        </p>
        <p>
           {exp.role}
        </p>
      </section>
    </>
  ));

  return <div>{proWork}</div>;
}

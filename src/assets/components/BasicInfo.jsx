

export default function BasicInfo({ data }) {
  const { fname, lname, email, mobile } = data;

  return (
    <section className="cv-card personal-info" aria-labelledby="person-name">
      <h2 className="person-name" id="person-name">
        {fname} {lname}
      </h2>
      <div className="contact-details">
        <p className="contact-item">
          <strong>Email</strong>
          <span>{email}</span>
        </p>
        <p className="contact-item">
          <strong>Mobile</strong>
          <span>{mobile}</span>
        </p>
      </div>
    </section>
  );
}

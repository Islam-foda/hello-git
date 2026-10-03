

export default function BasicInfo({ data }) {
  const { fname, lname, email, mobile } = data;

  return (
   <>
  <section id="center">
    <h4>{fname} {lname}</h4>
    
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Mobile:</strong> {mobile}</p>
  </section>
</>
  );
}

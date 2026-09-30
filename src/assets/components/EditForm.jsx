export default function EditForm({ handleChange, onsubmit, person }) {
  return (
    <>
      <section id="">
        <form onSubmit={onsubmit} action="post">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={person.fname}
            onChange={handleChange}
            placeholder="first name"
            autoComplete="given-name"
            required
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={person.lname}
            onChange={handleChange}
            placeholder="last name"
            autoComplete="given-name"
            required
          />
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange}
            placeholder="email@example.com"
            autoComplete="given-name"
            required
          />
          <label htmlFor="mobile">mobile</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={person.mobile}
            onChange={handleChange}
            placeholder="01xxxxxxxx"
            maxLength={11}
            pattern="[0-9]{11}"
            autoComplete="given-name"
            required
          />
          <button type="submit">Save Change</button>
        </form>
      </section>
    </>
  );
}

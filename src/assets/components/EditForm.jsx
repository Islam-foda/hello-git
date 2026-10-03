export function ProExpInput({ handleExpChange, exp, removeExp }) {
  return (
    <>
      <label htmlFor="company">Company Name</label>
      <input
        type="text"
        name="company"
        id="company"
        value={exp.company}
        onChange={(e) => handleExpChange(exp.id, e)}
        placeholder="Company Name"
        autoComplete="given-name"
        required
      />
      <label htmlFor="role">title</label>
      <input
        type="text"
        name="role"
        id="role"
        value={exp.role}
        onChange={(e) => handleExpChange(exp.id, e)}
        placeholder="role"
        autoComplete="given-name"
        required
      />
      <button type="button" onClick={() => removeExp(exp.id)}>
        Remove
      </button>
    </>
  );
}

export default function EditForm({
  person,
  handleChange,
  handleExpChange,
  addExp,
  removeExp,
}) {
  return (
    <>
      <section id="">
        <form onSubmit={(e) => e.preventDefault()}>
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
          <h3>Work Experience</h3>
          {person.workExp.map((exp) => (
            <ProExpInput
              key={exp.id}
              exp={exp}
              handleExpChange={handleExpChange}
              removeExp={removeExp}
            />
          ))}

          <button type="button" onClick={addExp}>
            + Add work experience
          </button>
        </form>
      </section>
    </>
  );
}

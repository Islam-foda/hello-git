

export default function EditForm({handleChange, onsubmit, person}) {
  return (
    <>
     <section id="center">
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
          />
        </form>
      </section>

     
    </>
  )
}

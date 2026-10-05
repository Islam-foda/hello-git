import EduExpInput from "./EduExpInput";

export function ProExpInput({ handleExpChange, exp, removeExp }) {
  return (
    <div className="experience-fields">
      <div className="form-field">
        <label htmlFor={`company-${exp.id}`}>Company</label>
        <input
          type="text"
          name="company"
          id={`company-${exp.id}`}
          value={exp.company}
          onChange={(e) => handleExpChange(exp.id, e)}
          placeholder="Company name"
          autoComplete="organization"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor={`role-${exp.id}`}>Job title</label>
        <input
          type="text"
          name="role"
          id={`role-${exp.id}`}
          value={exp.role}
          onChange={(e) => handleExpChange(exp.id, e)}
          placeholder="Your role"
          autoComplete="organization-title"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor={`startAt-${exp.id}`}>From</label>
        <input
          type="month"
          name="startAt"
          id={`startAt-${exp.id}`}
          value={exp.startAt ?? ""}
          onChange={(e) => handleExpChange(exp.id, e)}
          autoComplete="organization-startAt"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor={`endAt-${exp.id}`}>To</label>
        <input
          type="month"
          name="endAt"
          id={`endAt-${exp.id}`}
          value={exp.endAt ?? ""}
          onChange={(e) => handleExpChange(exp.id, e)}
          autoComplete="organization-endAt"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor={`responsibilities-${exp.id}`}>Responsibilites</label>
        <textarea
          type="text"
          name="responsibilities"
          rows="4"
          cols="50"
          maxLength="300"
          id={`responsibilities-${exp.id}`}
          value={exp.responsibilities}
          onChange={(e) => handleExpChange(exp.id, e)}
          autoComplete="organization-responsibilities"
          required
        />
      </div>
      <button
        className="button button-danger"
        type="button"
        onClick={() => removeExp(exp.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default function EditForm({
  person,
  handleChange,
  handleExpChange,
  addExp,
  removeExp,
  handleEduChange,
  addEdu,
  removeEdu,
}) {
  return (
    <section className="edit-form" aria-labelledby="edit-form-heading">
      <h2 className="section-heading" id="edit-form-heading">
        Personal details
      </h2>
      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={person.fname}
            onChange={handleChange}
            placeholder="First name"
            autoComplete="given-name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={person.lname}
            onChange={handleChange}
            placeholder="Last name"
            autoComplete="family-name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange}
            placeholder="email@example.com"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="mobile">Mobile number</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={person.mobile}
            onChange={handleChange}
            placeholder="01xxxxxxxx"
            maxLength={11}
            pattern="[0-9]{11}"
            autoComplete="tel"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="social">Links</label>
          <input
            type="url"
            name="social"
            id="social"
            value={person.social}
            onChange={handleChange}
            placeholder="enter social links"
            autoComplete="url"
          />
        </div>
      </div>
      <div className="experience-editor">
        <div className="experience-editor-heading">
          <h2 className="section-heading">Work experience</h2>
          <button
            className="button button-secondary"
            type="button"
            onClick={addExp}
          >
            + Add experience
          </button>
        </div>
        {person.workExp.map((exp) => (
          <ProExpInput
            key={exp.id}
            exp={exp}
            handleExpChange={handleExpChange}
            removeExp={removeExp}
          />
        ))}
      </div>
      <div className="experience-editor">
        <div className="experience-editor-heading">
          <h2 className="section-heading">Education experience</h2>
          <button
            className="button button-secondary"
            type="button"
            onClick={addEdu}
          >
            + Add Education
          </button>
        </div>
        {person.eduExp.map((edu) => (
          <EduExpInput
            key={edu.id}
            edu={edu}
            handleEduChange={handleEduChange}
            removeEdu={removeEdu}
          />
        ))}
      </div>
    </section>
  );
}

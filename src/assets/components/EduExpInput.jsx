export default function EduExpInput({ handleEduChange, edu, removeEdu }) {
  return (
    <div className="experience-fields">
      <div className="form-field">
        <label htmlFor={`school-${edu.id}`}>School</label>
        <input
          type="text"
          name="school"
          id={`school-${edu.id}`}
          value={edu.school}
          onChange={(e) => handleEduChange(edu.id, e)}
          placeholder="School name"
          autoComplete="organization"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor={`title-${edu.id}`}>Title</label>
        <input
          type="text"
          name="title"
          id={`title-${edu.id}`}
          value={edu.title}
          onChange={(e) => handleEduChange(edu.id, e)}
          placeholder="Your Title"
          autoComplete="organization-title"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor={`period-${edu.id}`}>Year</label>
        <input
          type="date"
          name="period"
          id={`period-${edu.id}`}
          value={edu.period ?? ''}
          onChange={(e) => handleEduChange(edu.id, e)}
          autoComplete="organization-period"
          required
        />
      </div>
      <button
        className="button button-danger"
        type="button"
        onClick={() => removeEdu(edu.id)}
      >
        Remove
      </button>
    </div>
  );
}

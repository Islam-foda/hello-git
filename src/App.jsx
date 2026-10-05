import { useState } from "react";
import "./App.css";
import EditForm from "./assets/components/EditForm";
import BasicInfo from "./assets/components/BasicInfo";
import ProInfo from "./assets/components/ProInfo";
import EduInfo from "./assets/components/EduInfo";

const emptyExp = () => ({
  id: crypto.randomUUID(),
  company: "",
  role: "",
  period: { startAt: Date, endAt: Date },
  responsibilities: "",
});

const emptyEdu = () => ({
  id: crypto.randomUUID(),
  school: "",
  title: "",
  period: { GraduateAt: Date },
});

function App() {
  const [person, setPerson] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    social:"",
    workExp: [emptyExp()],
    eduExp:[emptyEdu()]
  });

  const [editing, setEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((preValue) => ({ ...preValue, [name]: value }));
  };
//handle Professional Experience
  const handleExpChange = (id, e) => {
    const { name, value } = e.target;
    setPerson((prev) => ({
      ...prev,
      workExp: prev.workExp.map((item) =>
        item.id === id ? { ...item, [name]: value } : item,
      ),
    }));
  };

  const addExp = () => {
    setPerson((prev) => ({
      ...prev,
      workExp: [...prev.workExp, emptyExp()],
    }));
  };

  const removeExp = (id) => {
    setPerson((prev) => ({
      ...prev,
      workExp: prev.workExp.filter((item) => item.id !== id),
    }));
  };

  //Handle Education Experience
    const handleEduChange = (id, e) => {
    const { name, value } = e.target;
    setPerson((prev) => ({
      ...prev,
      eduExp: prev.eduExp.map((item) =>
        item.id === id ? { ...item, [name]: value } : item,
      ),
    }));
  };

  const addEdu = () => {
    setPerson((prev) => ({
      ...prev,
      eduExp: [...prev.eduExp, emptyEdu()],
    }));
  };

  const removeEdu = (id) => {
    setPerson((prev) => ({
      ...prev,
      eduExp: prev.eduExp.filter((item) => item.id !== id),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing((preValue) => !preValue);
  };

  return (
    <main className="cv-app">
      <h1 className="app-title">Curriculum Vitae</h1>
      <form className="cv-form" onSubmit={handleSubmit}>
        {editing ? (
          <EditForm
            person={person}
            handleChange={handleChange}
            handleExpChange={handleExpChange}
            addExp={addExp}
            removeExp={removeExp}
            handleEduChange={handleEduChange}
            addEdu={addEdu}
            removeEdu={removeEdu}
          />
        ) : (
          <div className="cv-preview">
            <BasicInfo data={person} />
            <ProInfo data={person} />
            <EduInfo data={person}/>
          </div>
        )}
        <div className="form-actions">
          <button className="button button-primary" type="submit">
            {editing ? "Save changes" : "Update CV"}
          </button>
        </div>
      </form>
    </main>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import EditForm from "./assets/components/EditForm";
import BasicInfo from "./assets/components/BasicInfo";
import ProInfo from "./assets/components/ProInfo";

const emptyExp = () => ({
  id: crypto.randomUUID(),
  company: "",
  role: "",
  period:{startAt:Date,endAt:Date}
});

function App() {
  const [person, setPerson] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    workExp: [emptyExp()],
  });

  const [editing, setEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((preValue) => ({ ...preValue, [name]: value }));
  };

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

  // Remove a block
  const removeExp = (id) => {
    setPerson((prev) => ({
      ...prev,
      workExp: prev.workExp.filter((item) => item.id !== id),
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
          />
        ) : (
          <div className="cv-preview">
            <BasicInfo data={person} />
            <ProInfo data={person} />
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

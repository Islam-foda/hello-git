import { useState } from "react";
import "./App.css";
import EditForm from "./assets/components/EditForm";
import BasicInfo from "./assets/components/BasicInfo";
import ProInfo from "./assets/components/ProInfo";

const emptyExp = () => ({
  id: crypto.randomUUID(),
  company: "",
  role: "",
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
    <>
      <h1>
        <i>Curriculum Vita</i>
      </h1>
      {editing ? (
        <EditForm
          person={person}
          handleChange={handleChange}
          handleExpChange={handleExpChange}
          addExp={addExp}
          removeExp={removeExp}
        />
      ) : (
        <>
          <BasicInfo data={person} />
          <ProInfo data={person}/>
        </>
      )}
      <section id="spacer">
        <button onClick={handleSubmit}>
          {editing ? "Save changes" : "Update CV"}
        </button>
      </section>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import EditForm from "./assets/components/EditForm";
import BasicInfo from "./assets/components/BasicInfo";

function App() {
  const [person, setPerson] = useState({});
  const [editing, setEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((preValue) => ({ ...preValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing((preValue) => !preValue);
  };

  return (
    <>
    <h1><i>Curriculum Vita</i></h1>
      {editing ? (
        <EditForm
          handleChange={handleChange}
          onsubmit={handleSubmit}
          person={person}
        />
      ) : (
        <BasicInfo data={person} />
      )}
      <section id="spacer">
        <button  onClick={handleSubmit}>
          {editing ? "Save changes" : "Update CV"}
        </button>
      </section>
    </>
  );
}

export default App;

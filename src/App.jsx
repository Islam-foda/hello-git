import { useState } from "react";
import "./App.css";
import EditForm from "./assets/components/EditForm";
import BasicInfo from "./assets/components/BasicInfo";

function App() {
  const [person, setPerson] = useState({});
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((preValue) => ({ ...preValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing((preValue) => !preValue);
    console.log(person);
  };

  return (
    <>
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
        <button type="submit" onClick={handleSubmit}>
          {editing ? "Save changes" : "Create CV"}
        </button>
      </section>
    </>
  );
}

export default App;

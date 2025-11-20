import { useState } from 'react'
// import './App.css'
import CVdisplay from "./CVdisplay";
import CVform from "./CVform";
import {
  sampleEducation,
  sampleExperience,
  sampleGeneralInfo,
} from "./sampleData.js";

function App() {

  const [editMode, setEditMode] = useState(false);
  const [generalInfo, setGeneralInfo] = useState(sampleGeneralInfo);
  const [experience, setExperience] = useState(sampleExperience);
  const [education, setEducation] = useState(sampleEducation);

  function handleSubmit() {
    setEditMode(!editMode);
    // setGeneralInfo()
  }

  function handleEdit() {
    setEditMode(!editMode);
  }

  return (
    <div>
    {editMode ? (
        <>
          <CVform />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <CVdisplay generalInfo={generalInfo} />
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default App

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

  function toggleEditMode() {
    setEditMode(!editMode);
    // setGeneralInfo()
  }

  function handleSubmit(data) {
    setGeneralInfo(data);
  }

  return (
    <div>
    {editMode ? (
        <CVform
          initialData={generalInfo}
          toggleEditMode={toggleEditMode}
          onSubmit={handleSubmit}
        />
      ) : (
        <CVdisplay 
        generalInfo={generalInfo}
        experience={experience}
        education={education} 
        toggleEditMode={toggleEditMode}
       />
      )}
    </div>
  );
}

export default App

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
  
  const [generalInfo, setGeneralInfo] = useState(sampleGeneralInfo);
  const [experience, setExperience] = useState(sampleExperience);
  const [education, setEducation] = useState(sampleEducation);

  return (
    <div>
      <h1>Hello {generalInfo.firstName}</h1>
     <CVdisplay />
     <CVform />
    </div>
  );
}

export default App

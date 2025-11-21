export default function CVdisplay({
  generalInfo,
  experience,
  education, 
  toggleEditMode
}) {

  function GeneralInfoSection() {
    return (
      <div>
        <h1>
          {generalInfo.firstName} {generalInfo.lastName}
        </h1>
        <p>{generalInfo.position}</p>
        <p>
          contact: {generalInfo.phone}&ensp;•&ensp;email: {generalInfo.email}
        </p>
      </div>
    );
  }

  function ExperienceSection() {
    return (
      <div>
        <h2>Experience</h2>
        {experience.map((obj) => (
          <div>
            <h3>{obj.companyName}</h3>
            <p>
              <span>{obj.positionTitle}</span>
              &ensp;|&ensp;{obj.dateStart}
              {obj.dateEnd ? <>&ndash;{obj.dateEnd}</> : "\u2013Present"}
            </p>
            <p>{obj.responsibilities}</p>
          </div>
        ))}
      </div>
    );
  }

  function EducationSection() {
    return (
      <div>
        <h2>Education</h2>
        {education.map((obj) => (
          <div key={obj.id}>
            <h3>{obj.schoolName}</h3>
            <p>
              {obj.degree}, {obj.areaOfStudy}&ensp;|&ensp;{obj.dateStart}
              {obj.dateEnd ? <>&ndash;{obj.dateEnd}</> : "\u2013Present"}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={toggleEditMode}
      >
        Edit
      </button>
      <div>
        <GeneralInfoSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  );
}
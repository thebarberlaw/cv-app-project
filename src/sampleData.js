const sampleGeneralInfo = {
  firstName: "Lawrence",
  lastName: "Villalobos",
  position: "Frontend Developer",
  phone: "12042260283",
  email: "lawrence.villalobos@yahoo.ca",
};

const sampleExperience = [
  {
    id: crypto.randomUUID(),
    companyName: "Odin Project curriculum",
    positionTitle: "web Debeloper",
    responsibilities:
      "learning HTML/CSS, Javascript and React, learning how to become a full stack developer in the future.",
    dateStart: 2025,
    dateEnd: undefined,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Thebarberlaw Barbers",
    positionTitle: "Barber",
    responsibilities:
      "Enhancing men's look by providing a haircutting services, consulting a client before performing performing the service and small talk",
    dateStart: 2017,
    dateEnd: 2025,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Maple Leaf Foods Co.",
    positionTitle: "Production Workeer",
    responsibilities:
      "Operaating machine, practicing sanitazion and food handling, packing products and problem solving with the team",
    dateStart: 2015,
    dateEnd: 2016,
  },
];

const sampleEducation = [
  {
    id: crypto.randomUUID(),
    schoolName: "Manitoba Institute of Technology",
    degree: "Hairstyling Program",
    areaOfStudy: "barber",
    dateStart: 2016,
    dateEnd: 2017,
  },
];

export { sampleGeneralInfo, sampleExperience, sampleEducation };
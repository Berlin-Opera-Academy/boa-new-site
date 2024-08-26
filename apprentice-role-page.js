// Array of objects containing the data
const roles = [
  {
    title: "Répétiteur",
    description:
      "Under the guidance of our staff, you will have the chance to learn what is required in opera houses and what is expected from accompanists. Your development and education will be furthered through assisting individual lessons on the essential keys of good coaching and skillful accompaniment. All assigned activities are based on the individual’s desire and interest, and the merit earned by their preparation level upon arrival. As we will provide contacts and opportunities to play for experienced professionals, who can recommend employment, we expect all apprentices to arrive with a professional level of preparation. You will:",
    responsibilities: [
      "play production rehearsals",
      "assist the Maestro and faculty répétiteurs during production rehearsals and music coachings",
      "collaborate with Vocal Faculty during singing lessons and masterclasses",
      "be prepared to coach singers in your areas of strength",
      "assist with accompaniment in concerts",
      "sing in lines during production rehearsals and in music coachings to fill in for absent or ill singers",
      "play in the chosen performances (at the discretion of the musical director)",
    ],
    additional:
      "Successful applicants will be assigned to two productions during the BOA Opernfest Festival. It is also possible to participate in only one production.",
    imagePath: "media/apprentice-repetiteur-ariadne-detlef-kurth.jpg",
    hash: "#rep",
  },
  {
    title: "Assistant Conductor",
    description:
      "Develop as a conductor under the direction of world-class faculty. Receive crucial experience and hear feedback from both sides of the baton. Grow under the guidance of conductors and singers, while leading the ensemble. All assigned activities are based on the individual’s areas of interest and their level of preparation upon arrival. You will:",
    responsibilities: [
      "play production rehearsals",
      "assist the Maestro and faculty répétiteurs during production rehearsals and music coachings",
      "collaborate with Vocal Faculty during singing lessons and masterclasses",
      "sing in lines during production rehearsals and music coachings to fill in for absent or ill singers",
      "assist with accompaniment during concerts",
      "play in the chosen performances (at the discretion of the musical director)",
      "conduct rehearsals when asked",
    ],
    additional:
      "Additional responsibilities will include working closely with the conductor to keep a performance-ready score with all relevant notes from rehearsals, as well as, coaching singers in your areas of strength. We will provide contacts and opportunities to play for experienced professionals, who can recommend employment, and expect all apprentices to arrive with a professional level of preparation. Note: the tuition for the conductor position is 950 EUR per session.",
    imagePath: "media/assistant-conductor-apprentice.jpg",
    hash: "#ac",
  },
  {
    title: "Assistant Director",
    description:
      "Develop your skills as an assistant director under the tutelage of faculty experienced in the international opera scene. Use your initiative and take responsibility for tasks in a safe environment, mentored by the staff. Gain connections and experience while developing your directorial skills and mastering key aspects of successful assistant directing. You will:",
    responsibilities: [
      "work closely with the director to prepare rehearsal schedules and content",
      "prepare the following day’s rehearsal schedule and calls with the director, conductor, and choreographer (where applicable) and send it to the Administrator after rehearsal",
      "keep a rehearsal book/score with all singers’ dramatic and staging cues and information",
      "assist with prop-making, set-creation, and costumes where relevant",
    ],
    additional:
      "The program’s aim is to give our Assistant Directors enough familiarity with the process of directing, that they are able to apply for work in good houses and have a clearer picture of their own personal goals as developing directors.",
    imagePath: "media/assistant-director-apprentice.jpg",
    hash: "#ad",
  },
  {
    title: "Stage Manager",
    description:
      "Join the BOA team in one of the most important organisational positions. Take responsibility for all things related to the stage from calls to props to quick changes. Develop under the guidance of staff who regularly work at the world’s top houses. You will:",
    responsibilities: [
      "keep a rehearsal book/score with detailed notes/drawings during all rehearsals (including entrances, exits, costume changes, set changes, props, and technical calls)",
      "work with the director & conductor to prepare the rehearsal room to meet their requirements and daily plan",
      "call the start and end of all rehearsals and breaks",
      "ensure each cast gets balanced rehearsal time",
      "be responsible for all cast attendance (including communicating tardiness, absence, and illness to all relevant staff)",
      "contact singers if late",
      "assist with production tasks where relevant",
      "problem-solve any rehearsal issues that arise",
      "communicate with relevant faculty & staff in a timely and professional manner",
      "ensure rehearsal rooms are opened and locked 10 minutes prior to and following all rehearsals",
      "ensure all room keys are returned to the relevant parties",
    ],
    additional:
      "The program’s aim is to give our Stage Managers the chance to hone individual abilities, while demonstrating competency to staff members who can directly recommend you for employment opportunities.",
    imagePath: "media/stage-manager-apprentice.jpg",
    hash: "#sm",
  },
  {
    title: "Film & Media Intern",
    description:
      "Under the guidance of BOA staff and faculty, spearhead and support Film & Media projects at Berlin Opera Academy. You will:",
    responsibilities: [
      "explore projection work (if required for a directorial concept)",
      "learn operatic filming principles",
      "be guided through the process for creating effective advertising campaigns",
      "work on the recording, editing, and post-production involved in making digital records of our operas",
    ],
    additional:
      "Working with the BOA Media Faculty gives insight into effective videography techniques in both private and educational spheres. By working directly with singers and directors, filming and editing their productions and their day to day activities, you will build a network of artistic contacts worldwide.",
    imagePath:
      "media/film-and-media-best-internship-apprenticeship-berlin-summer.jpeg",
    hash: "#fm",
  },
  {
    title: "Production & Management Assistant",
    description:
      "If you are passionate about opera, get your feet wet with a variety of essential tasks, assisting the general director and artistic administrator directly and helping with the preparation of rehearsal plans. You will:",
    responsibilities: [
      "develop your marketing skills and enter the challenging but exciting world of art promotion",
      "work on web design, poster design, and/or face-to-face publicity",
      "have an experience that is tailored to your specific skills and interests",
      "be guided by former opera intendants and current leaders in the field",
    ],
    additional:
      "At BOA, we want to help you grow in your areas of strength, assist with weaknesses, and provide employment opportunities in the field.",
    imagePath: "media/lighting-apprentice.jpg",
    hash: "#pm",
  },
  {
    title: "Costume Intern",
    description:
      "Costume interns are responsible for the successful execution of the festival’s costume needs, creation and maintenance. You will:",
    responsibilities: [
      "sew, alter, source and mend costumes that fit within Directors’ concepts of the opera, work with the artists to fit and finalize the designs, and bring the design to the stage",
      "pull pieces and tailor from resources we already have in the TOA inventory as much as possible",
      "assist with quick changes/scene changes backstage during shows",
      "assist with costume budget, receipts, and accounting",
      "assist with the creation and execution of costume fitting schedules",
      "help with the process of getting costumes on/off and be prepared to deal with on-site costume emergencies (i.e. costume repairs if there is a rip during shows/rehearsals)",
      "assist with the organizing, scheduling and execution of the cleaning (washing, drying and dry cleaning of all costumes after shows and between shows)",
    ],
    additional:
      "BOA strives to allow participants to experience as much learning-by-doing as is possible.",
    imagePath: "media/costume-intern-lucjan.jpg",
    hash: "#cost",
  },
  {
    title: "Administrative Assistant",
    description:
      "Get experience in Arts Administration by assisting the BOA team with essential behind-the-scenes organisational tasks. You will:",
    responsibilities: [
      "develop skills in events and office management",
      "get a glimpse of all practical aspects of running an intensive opera summer school",
      "have the opportunity to assist with a variety of tasks from finances to communications",
      "be guided by the artistic director and other senior team members",
    ],
    additional:
      "The experience will be tailored to your specific skills and interests. At BOA, we want to help you grow in your areas of strength, assist with weaknesses, and provide employment opportunities in the field.",
    imagePath: "media/admin-assistant-intern.jpg",
    hash: "#admin",
  },
  {
    title: "Set Design Assistant",
    description:
      "Our set design intern will work closely with the directorial team and head set designer Simone Serlenga in support of the set design process for our opera productions in Berlin. A summary of the responsibilities include, but are not limited to:",
    responsibilities: [
      "Supporting with the construction of both the model and final product set design",
      "Supporting the sourcing of relevant set or prop materials throughout Berlin as needed",
      "Providing assistance with adjustments to set design plans and the construction of set as needed",
      "Assisting in communications with the production team and between departments",
    ],
    additional:
      'Find more info about Simone Serlenga <a href="https://schierke.com/biography/all/simone-serlenga-35120/">here</a>.',
    imagePath: "media/set-design-apprentice.jpg",
    hash: "#set",
  },
];

let currentIndex = 0;

for (const role of roles) {
  console.log(role.hash + " " + window.location.hash);
  if (role.hash === window.location.hash) {
    break;
  } else currentIndex++;
}

// Function to update the HTML content
function updateContent(index) {
  document.getElementById("apprentice-title").textContent = roles[index].title;
  document.getElementById("apprentice-description").textContent =
    roles[index].description;
  document.getElementById("apprentice-responsibilities").innerHTML = "";
  document
    .getElementById("apprentice-responsibilities")
    .appendChild(returnResponsibilitiesUL(roles[index].responsibilities));
  document.getElementById("apprentice-additional").innerHTML =
    roles[index].additional;
  document.querySelector(".panel-image img").src = roles[index].imagePath;
  window.location.hash = roles[index].hash; // Update the URL hash
}

function returnResponsibilitiesUL(responsibilities) {
  const responsibilitiesUnorderedList = document.createElement("ul");
  for (const responsibility of responsibilities) {
    const li = document.createElement("li");
    li.textContent = responsibility;
    responsibilitiesUnorderedList.appendChild(li);
  }

  return responsibilitiesUnorderedList;
}

// Event listeners for the arrows
document.querySelector(".arrow-left").addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : roles.length - 1;
  updateContent(currentIndex);
});

document.querySelector(".arrow-right").addEventListener("click", () => {
  currentIndex = currentIndex < roles.length - 1 ? currentIndex + 1 : 0;
  updateContent(currentIndex);
});

// Load the appropriate role based on the URL hash
function loadRoleFromHash() {
  const hash = window.location.hash.substring(1);
  const index = parseInt(hash, 10);
  if (!isNaN(index) && index >= 0 && index < roles.length) {
    currentIndex = index;
  }
  updateContent(currentIndex);
}

// Initial content load based on the URL hash
loadRoleFromHash();

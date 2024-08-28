// Function to load faculty data from faculty.json
async function loadFacultyData() {
  try {
    const response = await fetch("faculty.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.faculty;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// Load the faculty data and assign it to the faculty variable
let faculty = [];

loadFacultyData().then((data) => {
  faculty = data;
  console.log(faculty); // Check the loaded data

  // Ensure faculty is populated before proceeding
  if (faculty.length > 0) {
    // Initial content load based on the URL hash
    loadRoleFromHash();

    // Event listeners for the arrows
    document.querySelector(".arrow-left").addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : faculty.length - 1;
      updateContent(currentIndex);
    });

    document.querySelector(".arrow-right").addEventListener("click", () => {
      currentIndex = currentIndex < faculty.length - 1 ? currentIndex + 1 : 0;
      updateContent(currentIndex);
    });
  }
});

window.faculty = faculty;

let currentIndex = 0;

for (const entry of faculty) {
  console.log(entry.hash + " " + window.location.hash);
  if (entry.hash === window.location.hash) {
    break;
  } else currentIndex++;
}

// Function to update the HTML content
function updateContent(index) {
  if (faculty.length === 0) {
    console.error("Faculty data is not loaded yet.");
    return;
  }

  console.log(index);
  console.log(faculty[index]);

  document.getElementById("faculty-name").textContent = faculty[index].name;
  appendDescriptionP(faculty[index].description);
  document.getElementById("faculty-links").innerHTML = faculty[index].links;
  document.querySelector("#faculty-image img").src = faculty[index].imagePath;
  window.location.hash = faculty[index].hash; // Update the URL hash
}

function appendDescriptionP(descriptions) {
  const descriptionDiv = document.getElementById("faculty-description");
  const descriptionRemaining = document.getElementById("faculty-remaining");

  // Clear previous descriptions
  descriptionDiv.innerHTML = "";
  descriptionRemaining.innerHTML = "";

  // Append the first description to descriptionDiv
  if (descriptions.length > 0) {
    const firstDescription = descriptions[0];
    const p = document.createElement("p");
    p.textContent = firstDescription;
    descriptionDiv.appendChild(p);
  }

  // Append the rest of the descriptions to descriptionRemaining
  for (let i = 1; i < descriptions.length; i++) {
    const p = document.createElement("p");
    p.textContent = descriptions[i];
    descriptionRemaining.appendChild(p);
  }
}

function appendLinks(links) {
  const linksDiv = document.getElementById("faculty-description");

  // Clear previous descriptions
  linksDiv.innerHTML = "";

  for (let i = 0; i < links.length; i++) {
    const p = document.createElement("p");
    p.innerHTML = links[i];
    linksDiv.appendChild(p);
  }
}

// Load the appropriate role based on the URL hash
function loadRoleFromHash() {
  const hash = window.location.hash;
  console.log(hash);

  for (let i = 0; i < faculty.length; i++) {
    if (hash === faculty[i].hash) updateContent(currentIndex);
    currentIndex++;
  }
}

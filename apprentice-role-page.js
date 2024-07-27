// Array of objects containing the data
const roles = [
  {
    title: "Répétiteur",
    description:
      "Under the guidance of our staff, you will have the chance to learn what is required in opera houses and what is expected from accompanists. Your development and education will be furthered through assisting individual lessons on the essential keys of good coaching and skillful accompaniment. All assigned activities are based on the individual’s desire and interest, and the merit earned by their preparation level upon arrival. As we will provide contacts and opportunities to play for experienced professionals, who can recommend employment, we expect all apprentices to arrive with a professional level of preparation. You will:",
    responsibilities: "Responsibilities for Répétiteur",
    hash: "#rep",
  },
  {
    title: "Assistant Conductor",
    description: "Description for Assistant Conductor.",
    responsibilities: "Responsibilities for Assistant Conductor.",
    imagePath: "media/ac.jpg",
    hash: "#ac",
  },
  {
    title: "Assistant Director",
    description: "Description for Assistant Director.",
    responsibilities: "Responsibilities for Assistant Director.",
    imagePath: "media/ad.jpg",
    hash: "#ad",
  },
  {
    title: "Stage Manager",
    description: "Description for Stage Manager.",
    responsibilities: "Responsibilities for Stage Manager.",
    imagePath: "media/ad.jpg",
    hash: "#sm",
  },
  {
    title: "Film & Media Intern",
    description: "Description for Film & Media Intern.",
    responsibilities: "Responsibilities for Film & Media Intern.",
    imagePath: "media/ad.jpg",
    hash: "#fm",
  },
  {
    title: "Production & Management Assistant",
    description: "Description for Production & Management Assistant.",
    responsibilities: "Responsibilities for Production & Management Assistant.",
    imagePath: "media/ad.jpg",
    hash: "#pm",
  },
  {
    title: "Costume Intern",
    description: "Description for Costume Intern.",
    responsibilities: "Responsibilities for Costume Intern.",
    imagePath: "media/ad.jpg",
    hash: "#cost",
  },
  {
    title: "Administrative Assistant",
    description: "Description for Administrative Assistant.",
    responsibilities: "Responsibilities for Administrative Assistant.",
    imagePath: "media/ad.jpg",
    hash: "#admin",
  },
  {
    title: "Marketing Assistant",
    description: "Description for Marketing Assistant.",
    responsibilities: "Responsibilities for Marketing Assistant.",
    imagePath: "media/ad.jpg",
    hash: "#market",
  },
  {
    title: "Set Design Assistant",
    description: "Description for Set Design Assistant.",
    responsibilities: "Responsibilities for Set Design Assistant.",
    imagePath: "media/ad.jpg",
    hash: "#set",
  },
  // Add more roles as needed
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
  document.getElementById("apprentice-responsibilities").textContent =
    roles[index].responsibilities;
  document.querySelector(".panel-image img").src = roles[index].imagePath;
  window.location.hash = roles[index].hash; // Update the URL hash
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

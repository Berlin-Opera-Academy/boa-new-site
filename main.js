// Array of objects, where each object contains the text and the URL of an image
var slides = [
  {
    title: "Starting in January 2025",
    body: "BOA introduces an immersive, full-time course option for singers wishing to deepen their training in Berlin over a longer time. <br><br> Over 4 months, classes include Stagecraft, Singing Lessons, Coachings and daily intensive German language. Click here for more Info!",
    imageUrl:
      "media/educational-summer-in-berlin-best-opera-program-zauberfloete-stage-wide.jpg",
    link: "singers-full-time.html",
    buttonText: "LEARN MORE",
  },
  {
    title: "Opernfest 2025 Program Announced",
    body: "Berlin Opera Academy's summer festival repertoire //  <br><br>Cendrillon <br>L'incorinazione di Poppea <br>Die Fledermaus <br>Die Zauberflöte.",
    imageUrl: "media/delphi-summer-opera-theater-stage-experience.jpg",
    link: "singers-summer.html",
    buttonText: "APPLY TODAY",
  },
  {
    title: "Where do BOA Alumni sing today?",
    body: "We love our alumni! To shine a spotlight: Meredith Wohlgemuth (BOA 2017) is an American Soprano, 2023 Grand Prize Winnder of the Metropolitan Opera Eric and Dominique Laffont Competition and made her house debut at Staatsoper Hannover, where she is now in the ensemble. Meredith, you rock! Keep an eye on this amazing soprano!",
    imageUrl: "media/meredith-wohlgemuth-soprano-alumni-copyright.jpg",
    link: "https://www.merwohlgemuth.com/",
    buttonText: "MEREDITH'S WEBSITE",
  },
  // Add more slides as needed
];
// Current index of the array
var currentIndex = 0;

// Get the text container and image container
var textContainer = document.querySelector(".who-we-are-panel .text-container");
var imageContainer = document.querySelector(
  ".who-we-are-panel .image-container img"
);

// Function that updates the text and image
function updateSlide() {
  // Get the current slide
  var slide = slides[currentIndex];

  // Update the title, body, and add the button
  textContainer.innerHTML = `
  <h2 class="slide-title">${slide.title}</h2>
  <p class="slide-body">${slide.body}</p>
  <a href="${slide.link}"><button class="apply-button">${slide.buttonText}</button></a>
`;

  setTimeout(function () {
    textContainer.classList.replace("invisible", "fade-in");
    imageContainer.src = slide.imageUrl;
    imageContainer.classList.replace("invisible", "fade-in");

    // Get the button and add the fade-in class
    var button = textContainer.querySelector(".apply-button");
    button.classList.add("fade-in");
  }, 0);

  // Add the invisible class initially
  textContainer.classList.add("invisible");
  imageContainer.classList.add("invisible");

  // Use setTimeout to allow the browser to update the class before triggering the transition
  setTimeout(function () {
    textContainer.classList.replace("invisible", "fade-in");
    imageContainer.src = slide.imageUrl;
    imageContainer.classList.replace("invisible", "fade-in");
  }, 0);

  // Update the current index
  currentIndex = (currentIndex + 1) % slides.length;
}

// Call the function once to start with the first slide
updateSlide();

// Then call the function every 5 seconds
setInterval(updateSlide, 7000);

// Add the event listener
textContainer.addEventListener("transitionend", function () {
  textContainer.classList.remove("fade-in");
});

imageContainer.addEventListener("transitionend", function () {
  imageContainer.classList.remove("fade-in");
});

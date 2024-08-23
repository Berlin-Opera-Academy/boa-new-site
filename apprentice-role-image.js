document.addEventListener("DOMContentLoaded", () => {
  const roles = document.querySelectorAll(".apprentice-role");
  const image = document.querySelector(".panel-image img");

  roles.forEach((role) => {
    role.addEventListener("mouseover", () => {
      switch (role.id) {
        case "rep":
          image.src = "media/apprentice-repetiteur-ariadne-detlef-kurth.jpg";
          break;
        case "ac":
          image.src = "media/assistant-conductor-apprentice.jpg";
          break;
        case "ad":
          image.src = "media/assistant-director-apprentice.jpg";
          break;
        case "sm":
          image.src = "media/stage-manager-apprentice.jpg";
          break;
        case "fm":
          image.src =
            "media/film-and-media-best-internship-apprenticeship-berlin-summer.jpeg";
          break;
        case "pm":
          image.src = "media/lighting-apprentice.jpg";
          break;
        case "cost":
          image.src = "media/costume-intern-lucjan.jpg";
          break;
        case "admin":
          image.src = "media/admin-assistant-intern.jpg";
          break;
        case "set":
          image.src = "media/set-design-apprentice.jpg";
          break;
        default:
          image.src = "default-image.jpg";
      }
    });
  });
});

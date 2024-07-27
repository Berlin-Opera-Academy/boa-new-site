document.addEventListener("DOMContentLoaded", () => {
  const roles = document.querySelectorAll(".apprentice-role");
  const image = document.querySelector(".panel-image img");

  roles.forEach((role) => {
    role.addEventListener("mouseover", () => {
      switch (role.id) {
        case "rep":
          image.src = "path/to/rep-image.jpg";
          break;
        case "ac":
          image.src = "path/to/ac-image.jpg";
          break;
        case "ad":
          image.src = "path/to/ad-image.jpg";
          break;
        case "sm":
          image.src = "path/to/sm-image.jpg";
          break;
        case "fm":
          image.src =
            "media/film-and-media-best-internship-apprenticeship-berlin-summer.jpeg";
          break;
        case "pm":
          image.src = "path/to/pm-image.jpg";
          break;
        case "cost":
          image.src = "media/costume-intern.jpg";
          break;
        case "admin":
          image.src = "path/to/admin-image.jpg";
          break;
        case "market":
          image.src = "path/to/market-image.jpg";
          break;
        case "set":
          image.src = "path/to/set-image.jpg";
          break;
        default:
          image.src = "default-image.jpg";
      }
    });
  });
});

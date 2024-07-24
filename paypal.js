paypal
  .HostedButtons({
    hostedButtonId: "PFXYD25T6BC2A",
  })
  .render("#paypal-container-PFXYD25T6BC2A");

window.addEventListener("load", function () {
  const observer = new MutationObserver(function (mutations) {
    const priceLabel = document.querySelector("#price-label");
    const description = document.querySelector("#desc-label");
    const container = document.querySelector(
      "#paypal-form-fields-container-PFXYD25T6BC2A"
    );
    const total = container.lastChild;
    if (priceLabel) {
      priceLabel.remove();
      description.style.fontFamily = "HK Grotesk-ExtraLight, sans-serif";
      description.style.color = "#fff";
      description.style.fontSize = "1em";
      description.style.margin = "1em 0 -1em 0";
      description.innerHTML = "<strong>BOA Application Fee - 39€</strong>";
      total.remove().observer.disconnect(); // Stop observing once we've found and removed the element
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
const div = document.getElementById("paypal-container-PFXYD25T6BC2A");
div.addEventListener("click", (e) => {});

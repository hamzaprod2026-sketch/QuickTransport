const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "×" : "☰";
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.textContent = "☰";
}));

document.querySelectorAll(".faq-item button").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(row => {
      row.classList.remove("open");
      row.querySelector("button").setAttribute("aria-expanded", "false");
      row.querySelector("button span").textContent = "+";
    });
    if (!wasOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      button.querySelector("span").textContent = "−";
    }
  });
});

// Démonstration front-end : relier à un service de formulaire pour recevoir réellement les demandes.
const form = document.getElementById("quickForm");
form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = new FormData(form).get("name");
  document.getElementById("formMsg").textContent =
    `Merci ${name} ! Votre demande est prête. Connectez un service d'envoi pour la transmettre à l'entreprise.`;
  form.reset();
});
document.getElementById("year").textContent = new Date().getFullYear();

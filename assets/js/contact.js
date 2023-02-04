//Javacript pour l'astuce d'e-mail
const email = document.getElementById("mail");
email.addEventListener("keyup", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Je préfère les e-mails valides 😉");
  } else {
    email.setCustomValidity("");
  }
});
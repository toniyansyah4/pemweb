const username = document.querySelector(".username");
const password = document.querySelector(".password");
const signIn = document.querySelector(".sign-in");
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

signIn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value == "admin" && password.value == 12345) {
    window.location.href = "../pages/admin/list-seminar.html";
  } else {
    alert("Login Gagal");
    username.value = "";
    password.value = "";
  }
});

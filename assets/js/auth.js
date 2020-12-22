const username = document.querySelector(".username");
const password = document.querySelector(".password");
const signIn = document.querySelector(".sign-in");

signIn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value == "admin" && password.value == 12345) {
    alert("Login Sukses");
  } else {
    alert("Login Gagal");
  }
});

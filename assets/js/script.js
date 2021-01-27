var x = document.getElementById("myMenu");
var navigasi = document.getElementById("navigasi");
navigasi.checked = false

function menuNavbar() {
    if (navigasi.checked == true) {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggle.innerHTML = "☀️ Light Mode";
    } else {
        toggle.innerHTML = "🌙 Dark Mode";
    }

});

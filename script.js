document.getElementById('language-select').addEventListener('change', function() {
    alert('Language selection will be implemented soon!');
});

function toggleMenu() {
    var menu = document.querySelector(".menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

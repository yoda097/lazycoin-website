document.addEventListener("DOMContentLoaded", function() {
    var languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            alert('Language selection will be implemented soon!');
        });
    }
});

function toggleMenu() {
    var menu = document.querySelector(".menu");
    if (menu) {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex"; // "block" yerine "flex" kullanarak hizalamayı bozma
        }
    }
}

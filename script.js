// Toggle Menu Function
function toggleMenu() {
    var menu = document.querySelector(".menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Smooth Scrolling Function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    document.querySelector(".menu").style.display = "none"; // Hide menu after click
}

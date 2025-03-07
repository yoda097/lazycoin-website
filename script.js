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

// Moving Stars Background Effect
document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.getElementById("star-container");

    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.className = "stars";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDuration = Math.random() * 3 + 2 + "s";
        starContainer.appendChild(star);
    }
});

// 🌙 Toggle Theme Function
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
});

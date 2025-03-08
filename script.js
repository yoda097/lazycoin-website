// Toggle Menu Function
function toggleMenu() {
    var menu = document.querySelector(".menu");
    var menuIcon = document.querySelector(".menu-icon");
    var body = document.body;

    // Menüye açılıp kapanma sınıfı ekle/kaldır
    body.classList.toggle("menu-open");

    // Menü ikonu değiştir (Hamburger ☰ ↔ X ✖)
    if (body.classList.contains("menu-open")) {
        menuIcon.innerHTML = "✖"; // X simgesi
    } else {
        menuIcon.innerHTML = "☰"; // Hamburger simgesi
    }
}

// Smooth Scrolling Function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    document.querySelector(".menu").style.display = "none"; // Hide menu after click
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animated-section");

    function checkScroll() {
        sections.forEach((section) => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Sayfa yüklenince kontrol et
});

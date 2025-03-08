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

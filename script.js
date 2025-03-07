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

document.addEventListener("DOMContentLoaded", function() {
    function createStar() {
        let star = document.createElement("div");
        star.className = "star";
        document.body.appendChild(star);

        // Rastgele konum ve renk
        let size = Math.random() * 3 + 2; // 2px - 5px arasÄ± boyut
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDuration = Math.random() * 5 + 2 + "s";
        star.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`; // Renkli yÄ±ldÄ±zlar

        setTimeout(() => { star.remove(); }, 7000); // YÄ±ldÄ±zlar bir sÃ¼re sonra silinir
    }

    setInterval(createStar, 300); // Her 300ms'de bir yeni yÄ±ldÄ±z ekler
});

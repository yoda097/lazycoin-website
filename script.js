// Navbar Toggle
function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Background Stars Animation
document.addEventListener("DOMContentLoaded", function() {
    function createStar() {
        let star = document.createElement("div");
        star.className = "star";
        document.body.appendChild(star);

        let size = Math.random() * 3 + 2;
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDuration = Math.random() * 5 + 2 + "s";
        star.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;

        setTimeout(() => { star.remove(); }, 7000);
    }

    setInterval(createStar, 300);
});

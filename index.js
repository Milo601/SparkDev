
// Typing effect (only runs if the Typed.js CDN script loaded)
window.addEventListener("DOMContentLoaded", function () {
    if (typeof Typed !== "undefined") {
        new Typed(".home .text", {
            strings: ["Frontend Developer", "YouTuber", "Web Developer", "Software Developer", "AI Automation"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    // Mobile menu
    var toggle = document.querySelector(".menu-toggle");
    var header = document.querySelector(".header");
    var icon = toggle.querySelector("i");

    function setMenu(open) {
        header.classList.toggle("menu-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        icon.className = open ? "bx bx-x" : "bx bx-menu";
    }

    toggle.addEventListener("click", function () {
        setMenu(!header.classList.contains("menu-open"));
    });

    document.querySelectorAll(".navbar a").forEach(function (link) {
        link.addEventListener("click", function () { setMenu(false); });
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setMenu(false);
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 991) setMenu(false);
    });
});
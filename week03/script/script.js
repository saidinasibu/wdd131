document.addEventListener("DOMContentLoaded", function () {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
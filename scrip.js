// ==============================
// MOBILE NAVBAR
// ==============================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


// ==============================
// TUTUP MENU SETELAH DIKLIK
// ==============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


// ==============================
// ANIMASI CARD GURU
// ==============================

const guruCards = document.querySelectorAll(".guru-card");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

guruCards.forEach(card => {
    observer.observe(card);
});


// ==============================
// TAHUN FOOTER OTOMATIS
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();
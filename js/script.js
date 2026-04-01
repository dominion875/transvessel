const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

// Show slide
function showSlide(n) {
    slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
});
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

// Next & Prev buttons
nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// Dot indicators
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
});
});

// Auto slide every 5s
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 6000);

// const icon = document.getElementById("menuIcon");
// const menu = document.getElementById("navMenu");
//     icon.addEventListener("click", () => {
//         menu.classList.toggle("active");
//         icon.classList.toggle("bi-list");
//         icon.classList.toggle("bi-x-lg");
// })

function addMenu() {
    const disp = document.getElementById("navMenu");
    disp.style.display = "flex"
}

function removeMenu() {
    const clos = document.getElementById("navMenu");
    clos.style.display = "none"
}
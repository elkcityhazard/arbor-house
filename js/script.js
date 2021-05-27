(function () {
const navToggle = document.querySelector('.hamburger-container');
const hamburger = document.querySelector('.hamburger-container > span')
const navBar = document.querySelector('.navbar-main > nav');
navToggle.addEventListener('click', (e) => {
    hamburger.classList.toggle('active')
    navBar.classList.toggle('active');
})})()




// Slider

const slideContainer = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-item');
let counter = 1;

function changeSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    if (counter > slides.length - 1) {
        counter = 0;
    }
    if (counter < 0) {
        counter = 0;
    }
    slides[counter].classList.add('active')
slideContainer.style.transform = `translateX(${counter * -100}%)`;
counter += 1;
console.log(counter)
}

let timer = setInterval(changeSlide, 10000);

slideContainer.addEventListener('click', () => {
    clearInterval(timer);
})



//lazy load images

const images = document.querySelectorAll('.lazy');

const config = {
    rootMargin: '15px 0px 0px 15px',
  threshold: [1, 0.5, 0.5, 1]
}

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.src = entry.target.getAttribute('data-src');
            entry.target.classList.add('fadeIn');
            observer.unobserve(entry.target);
        }
    })
}, config)

images.forEach(image => {
    observer.observe(image);
})


const yearContainer = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();

yearContainer.textContent = currentYear;
yearContainer.style.textDecoration = "none";
yearContainer.style.display = "inline";


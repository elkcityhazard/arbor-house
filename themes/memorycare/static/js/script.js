const parallax = (id, rate) => {
  let el = document.querySelector(id);

  const sp = () => {
      //   Define X and Y
    let x = el.getBoundingClientRect().top / rate;
    let y = Math.round(x * 100) / 100;

    //   Define Background Position Dynamically 

    el.style.backgroundPosition = 'center ' + y + 'px';

  }

  // initiate parameter function to position background;
  sp();

  // initiate scroll event listener and call parameter callback on scroll event

  window.addEventListener('scroll', function() { sp() });

}

parallax('.fixed-background', 3);


  






(function () {
  const navToggle = document.querySelector(".hamburger-container");
  const hamburger = document.querySelector(".hamburger-container > span");
  const navBar = document.querySelector(".navbar-main > nav");
  navToggle.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
  });
})();

// Slider

// const slideContainer = document.querySelector(".carousel-inner");
// const slides = document.querySelectorAll(".carousel-item");
// let counter = 1;

// function changeSlide() {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });

//   if (counter > slides.length - 1) {
//     counter = 0;
//   }
//   if (counter < 0) {
//     counter = 0;
//   }
//   slides[counter].classList.add("active");
//   slideContainer.style.transform = `translateX(${counter * -100}%)`;
//   counter += 1;
//   console.log(counter);
// }

// let timer = setInterval(changeSlide, 2000);

// slideContainer.addEventListener("click", () => {
//   clearInterval(timer);
// });

//lazy load images

function lazyLoad(elements) {
  // get DOMList of class
  elements = document.querySelectorAll(elements);
  //  Config for Intersection Observer
  const config = {
    rootMargin: "15px 0px 0px 15px",
    threshold: [1, 0.5, 0.5, 1]
  };

  // Create Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.getAttribute('data-src');
        entry.target.classList.add('fadeIn');
        observer.unobserve(entry.target);
      }
    })
  }, config);

  elements.forEach((element) => {
    observer.observe(element);
  })


}

const images = document.querySelectorAll(".lazy");

const config = {
  rootMargin: "15px 0px 0px 15px",
  threshold: [1, 0.5, 0.5, 1]
};

const observer = new IntersectionObserver((entries ) => {
  entries.forEach( (entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.src = entry.target.getAttribute("data-src");
      entry.target.classList.add("fadeIn");
      observer.unobserve(entry.target);
    }
  });
}, config);

images.forEach((image) => {
  observer.observe(image);
});


window.addEventListener('load', () => {
  const services = document.querySelectorAll('.service');
  const siteHeader = document.getElementById('siteTitle');
  if (!siteHeader) {
    return;
  }
  const siteSubtitle = document.getElementById('siteSubtitle');
  const ctaBtn = document.querySelector('header.header-main .cta-btn');
  siteHeader.style.opacity = 1;
  siteHeader.style.transform = "translateY(0)";
  siteSubtitle.style.opacity = 1;
  siteSubtitle.style.transform = "translateY(0)";
  ctaBtn.style.opacity = 1;
  
  for (let i = 0; i < services.length; i++) {
    setTimeout(() => {
      services[i].style.opacity = 1;
      services[i].style.transform = "translateX(0)";
    }, 1500 * i)
  }
})
  







const yearContainer = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();

yearContainer.textContent = currentYear;
yearContainer.style.textDecoration = "none";
yearContainer.style.display = "inline";


document.querySelectorAll('.desktop-nav a').forEach((link) => {
  if (link.getAttribute('href') === location.pathname) {
    link.style.fontWeight = 900;
    link.style.color = "indigo";
  }
})

const parallax = (id, rate) => {
  if (window.innerWidth < 1200) {
    return
  }
  let el = document.querySelector(id);
  if (!el) {
    return;
  }
  const sp = () => {
    //   Define X and Y
    let x = el.getBoundingClientRect().top / rate;
    let y = Math.round(x * 100) / 100;

    //   Define Background Position Dynamically

    el.style.backgroundPosition = "center " + y + "px";
  };

  // initiate parameter function to position background;
  sp();

  // initiate scroll event listener and call parameter callback on scroll event

  window.addEventListener("scroll", function () {
    sp();
  });
};

parallax(".fixed-background", 3);
parallax(".header-main", 3);



(function () {
  const navToggle = document.querySelector(".hamburger-container");
  const hamburger = document.querySelector(".hamburger-container > span");
  const navBar = document.querySelector(".navbar-main > nav");
  navToggle.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
  });
})();


//lazy load images

function lazyLoad(elements) {
  // get DOMList of class
  elements = document.querySelectorAll(elements);
  //  Config for Intersection Observer
  const config = {
    rootMargin: "15px 0px 0px 15px",
    threshold: [1, 0.5, 0.5, 1],
  };

  // Create Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.getAttribute("data-src");
        entry.target.classList.add("fadeIn");
        observer.unobserve(entry.target);
      }
    });
  }, config);

  elements.forEach((element) => {
    observer.observe(element);
  });
}

const images = document.querySelectorAll(".lazy");

const config = {
  rootMargin: "15px 0px 0px 15px",
  threshold: [1, 0.5, 0.5, 1],
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
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

window.addEventListener("load", () => {
  const services = document.querySelectorAll(".service");
  const siteHeader = document.getElementById("siteTitle");
  if (!siteHeader) {
    return;
  }
  const siteSubtitle = document.getElementById("siteSubtitle");
  const ctaBtn = document.querySelector("header.header-main .cta-btn");
  siteHeader.style.opacity = 1;
  siteHeader.style.transform = "translateY(0)";
  siteSubtitle.style.opacity = 1;
  siteSubtitle.style.transform = "translateY(0)";
  ctaBtn.style.opacity = 1;

  for (let i = 0; i < services.length; i++) {
    setTimeout(() => {
      services[i].style.opacity = 1;
      services[i].style.transform = "translateX(0)";
    }, 1500 * i);
  }
});

const yearContainer = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();

yearContainer.textContent = currentYear + " ";
yearContainer.style.textDecoration = "none";
yearContainer.style.display = "inline";

document.querySelectorAll(".desktop-nav a").forEach((link) => {
  if (link.getAttribute("href") === location.pathname) {
    link.style.fontWeight = 900;
    link.style.color = "indigo";
  }
});



// Testimonial slider
let counter = 0;
let isDragging = false,
startPost = 0,
currentTranslate = 0,
prevTranslate = 0,
animationID = 0

function handleDisabledButtons() {
  const totalSlides = document.querySelectorAll('.swiper-slide').length;

  if (counter >= totalSlides - 1) {
    document.getElementById('next-testimonial').setAttribute('disabled', true)
  } else {
    document.getElementById('next-testimonial').disabled = false;
  }

  if (counter <= 0) {
    document.getElementById('prev-testimonial').setAttribute('disabled', true)
  } else {
    document.getElementById('prev-testimonial').disabled = false;
  }
}

function incrementSlide(element, interval) {
  counter++
  const totalSlides = document.querySelectorAll('.swiper-slide').length;
  counter >= totalSlides - 1? counter = totalSlides - 1 : counter;
  element.style.transform = `translate3D(${counter * -100}%, 0, 0)`;
  clearInterval(interval);
  handleDisabledButtons();

  
}

function decrementSlide(element, interval) {
  counter--
  const totalSlides = document.querySelectorAll('.swiper-slide').length;
  counter <= 0 ? counter = 0 : counter
  element.style.transform = `translate3D(${counter * -100}%, 0, 0)`;
  clearInterval(interval)
  handleDisabledButtons();
}


function testimonialSlides() {
  const innerSwiper = document.querySelector(".swiper-wrapper");
  const slides = document.querySelectorAll(".swiper-slide");
  const prevBtn = document.getElementById('prev-testimonial')
  const nextBtn = document.getElementById('next-testimonial')
  const initSlider = setInterval(() => {
    counter++
    innerSwiper.style.transform = `translate3D(${counter * -100}%, 0, 0)`;
    if (counter >= slides.length - 1) {
      counter = -1;
    }

  }, 7000);
prevBtn.addEventListener('click', () => {
  decrementSlide( innerSwiper, initSlider);
})
nextBtn.addEventListener('click', () => {
  incrementSlide(innerSwiper, initSlider);
})
}

testimonialSlides()

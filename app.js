let testimonials = [
  {
    id: 1,
    name: "Zoha Babar",
    imgSrc: "https://i.ibb.co/ZG8hmFc/testimonial1.jpg",
    text: "The MSA at Penn State was my favorite student-led organization throughout my college career. The executive board was comprised of diverse and passionate students who always made themselves available to the club members and their needs. The MSA always met its goals of promoting unity and humanity among Muslims and non-Muslims within the University. The club did a great job of bringing people from all cultures and backgrounds together regardless of their differences, all while providing a sense of belonging. I was fortunate enough to meet the most fun, sincere, and warm-hearted people through the MSA. The friendships and memories you make here will last a lifetime!",
  },
  {
    id: 2,
    name: "Yaasat Nayeem",
    imgSrc: "https://i.ibb.co/YbjJ6Jc/IMG-5339.jpg",
    text: "The MSA has been the highlight of my college experience. I have made the best memories and friendships that I intend to keep for a lifetime. The best part of the MSA is a judgment free zone and the welcoming environment to both Muslims and non-Muslims. The club also promotes unity among all Muslims regardless of background and also promoting unity among the interfaith community. The MSA has helped me be very comfortable in being a Muslim at PSU. The people I met were the most sincere and genuine people and for that I was able to enjoy my time at Penn State.",
  },
];

const menuButton = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

let personImage = document.querySelector(".person-image");
let testimonialName = document.getElementById("testimonialName");
let testimonialText = document.querySelector(".testimonial-text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const header = document.querySelector(".header");
const content = document.querySelector(".content");

const contactLink = document.querySelector(".contact-link");
const footer = document.querySelector(".footer");
const headerHeight = header.getBoundingClientRect().height;

const logoContainer = document.querySelector(".logo-container");

let toggled;

let currentTestimonial = 0;

window.addEventListener("scroll", function () {
  if (!toggled) {
    console.log("I am running");
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > headerHeight + 200) {
      header.classList.add("fixed-header");
      logoContainer.classList.add("smaller-logo");
    } else {
      header.classList.remove("fixed-header");
      logoContainer.classList.remove("smaller-logo");
    }
  }
});

menuButton.addEventListener("click", function () {
  toggled = true;
  header.classList.remove("fixed-header");
  sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  toggled = false;
  sideBar.classList.remove("show-sidebar");
});

contactLink.addEventListener("click", function () {
  console.log("being");
  const fixedHeader = header.classList.contains("fixed-header");
  let position = footer.offsetTop - headerHeight;

  if (!fixedHeader) {
    position = position - headerHeight;
  }

  if (headerHeight > 82) {
    position = position + headerHeight;
  }
  window.scrollTo({
    left: 0,
    top: position,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  showTestimonial(currentTestimonial);
});
prevBtn.addEventListener("click", function () {
  if (currentTestimonial === 0) {
    currentTestimonial = testimonials.length - 1;
    showTestimonial(currentTestimonial);
  } else {
    currentTestimonial--;
    showTestimonial(currentTestimonial);
  }
});

nextBtn.addEventListener("click", function () {
  if (currentTestimonial === testimonials.length - 1) {
    currentTestimonial = 0;
    showTestimonial(currentTestimonial);
  } else {
    currentTestimonial++;
    showTestimonial(currentTestimonial);
  }
});

function showTestimonial(testimonialIndex) {
  const testimonial = testimonials[testimonialIndex];
  personImage.src = testimonial.imgSrc;
  testimonialName.textContent = testimonial.name;
  testimonialText.textContent = testimonial.text;
}

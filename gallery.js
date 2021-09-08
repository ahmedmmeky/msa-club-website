var gallery = document.querySelector(".gallery");
var galleryItems = document.querySelectorAll(".gallery-item");
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector(".featured-item");

var leftBtn = document.querySelector(".move-btn.left");
var rightBtn = document.querySelector(".move-btn.right");
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
  if (e.target.classList.contains("active")) return;

  featured.style.backgroundImage = e.target.style.backgroundImage;

  for (var i = 0; i < galleryItems.length; i++) {
    if (galleryItems[i].classList.contains("active"))
      galleryItems[i].classList.remove("active");
  }

  e.target.classList.add("active");
}

function galleryWrapLeft() {
  var first = gallery.children[0];
  gallery.removeChild(first);
  gallery.style.left = -itemWidth + "%";
  gallery.appendChild(first);
  gallery.style.left = "0%";
}

function galleryWrapRight() {
  var last = gallery.children[gallery.children.length - 1];
  gallery.removeChild(last);
  gallery.insertBefore(last, gallery.children[0]);
  gallery.style.left = "-23%";
}

function moveLeft() {
  left = left || 0;

  leftInterval = setInterval(function () {
    gallery.style.left = left + "%";

    if (left > -itemWidth) {
      left -= scrollRate;
    } else {
      left = 0;
      galleryWrapLeft();
    }
  }, 1);
}

function moveRight() {
  //Make sure there is element to the leftd
  if (left > -itemWidth && left < 0) {
    left = left - itemWidth;

    var last = gallery.children[gallery.children.length - 1];
    gallery.removeChild(last);
    gallery.style.left = left + "%";
    gallery.insertBefore(last, gallery.children[0]);
  }

  left = left || 0;

  leftInterval = setInterval(function () {
    gallery.style.left = left + "%";

    if (left < 0) {
      left += scrollRate;
    } else {
      left = -itemWidth;
      galleryWrapRight();
    }
  }, 1);
}

function stopMovement() {
  clearInterval(leftInterval);
  clearInterval(rightInterval);
}

leftBtn.addEventListener("mouseenter", moveRight);
leftBtn.addEventListener("mouseleave", stopMovement);
rightBtn.addEventListener("mouseenter", moveLeft);
rightBtn.addEventListener("mouseleave", stopMovement);

//Start this baby up
(function init() {
  var images = [
    "https://i.ibb.co/8b9vf0b/gallery1.jpg",
    "https://i.ibb.co/RczDHF1/gallery2.jpg",
    "https://i.ibb.co/TbCwpN4/gallery3.jpg",
    "https://i.ibb.co/qNYn8T4/gallery4.jpg",
    "https://i.ibb.co/C2L2KSV/gallery5.jpg",
    "https://i.ibb.co/LrC26Qw/gallery6.jpg",
    "https://i.ibb.co/zZqzkGs/gallery7.jpg",
    "https://i.ibb.co/cXLy6MQ/gallery8.jpg",
    "https://i.ibb.co/9H9Pdv0/gallery9.jpg",
    "https://i.ibb.co/xmb1WGM/gallery10.jpg",
    "https://i.ibb.co/Y7rrn6M/gallery11.jpg",
  ];

  //Set Initial Featured Image
  featured.style.backgroundImage = "url(" + images[0] + ")";

  //Set Images for Gallery and Add Event Listeners
  for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].style.backgroundImage = "url(" + images[i] + ")";
    galleryItems[i].addEventListener("click", selectItem);
  }
})();

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
    "https://i.ibb.co/5G8fXRx/DSC-0259.jpg",
    "https://i.ibb.co/LvxLWRx/DSC8231-2.jpg",
    "https://i.ibb.co/4MNqFcD/DSC8225.jpg",
    "https://i.ibb.co/hMmjTFf/DSC-0210.jpg",
    "https://i.ibb.co/YNNy1Rf/DSC-0075.jpg",
    "https://i.ibb.co/0Zz9fxL/DSC-0309.jpg",
    "https://i.ibb.co/zQ1khVp/DSC-0320.jpg",
    "https://i.ibb.co/ryp5VzM/DSC-1779-1.jpg",
    "https://i.ibb.co/GHkF4TM/DSC-1796.jpg",
    "https://i.ibb.co/2ZtwY7Z/DSC-2505.jpg",
    "https://i.ibb.co/92vbcdz/DSC-2443.jpg",
    "https://i.ibb.co/f4P0kVD/DSC-2524.jpg",
    "https://i.ibb.co/VQj71cN/DSC-2645.jpg",
    "https://i.ibb.co/9nrN8Wb/DSC-3019.jpg",
    "https://i.ibb.co/027fJr7/DSC-3062.jpg",
    "https://i.ibb.co/BVBZHGY/DSC-3205.jpg",
    "https://i.ibb.co/n6swFsg/DSC-3281.jpg",
    "https://i.ibb.co/WVPWs9J/DSC-3418.jpg",
    "https://i.ibb.co/WG6RpqF/DSC-3506.jpg",
    "https://i.ibb.co/hDwVNgK/DSC-6263-1.jpg",
    "https://i.ibb.co/kXqfY3n/DSC-6529.jpg",
    "https://i.ibb.co/XLTRW2r/DSC-6203-1.jpg",
    "https://i.ibb.co/3YmpDrF/IMG-0780-1.jpg",
    "https://i.ibb.co/2MDNNvK/DSC-6573.jpg",
    "https://i.ibb.co/59Lsc8f/IMG-2718.jpg",
    "https://i.ibb.co/Cw31prH/IMG-3069.jpg",
    "https://i.ibb.co/4gJ9r29/IMG-6386.jpg",
    "https://i.ibb.co/zNdm7pN/IMG-5090.jpg",
    "https://i.ibb.co/wgyg4DL/IMG-5945.jpg",
  ];

  //Set Initial Featured Image
  featured.style.backgroundImage = "url(" + images[0] + ")";

  //Set Images for Gallery and Add Event Listeners
  for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].style.backgroundImage = "url(" + images[i] + ")";
    galleryItems[i].addEventListener("click", selectItem);
  }
})();

let boardImages = [
  {
    id: 2,
    imgSrc: "https://i.ibb.co/6Y0Wm28/PHOTO-2021-08-25-16-12-26.jpg",
  },
  {
    id: 3,
    imgSrc: "https://i.ibb.co/Wxc53Hs/PHOTO-2021-08-25-16-12-27.jpg",
  },
  {
    id: 5,
    imgSrc: "https://i.ibb.co/dfTYXfT/PHOTO-2021-08-25-16-12-28.jpg",
  },
  {
    id: 4,
    imgSrc: "https://i.ibb.co/sCDXBg6/PHOTO-2021-08-25-16-12-28-2.jpg",
  },
  {
    id: 6,
    imgSrc: "https://i.ibb.co/7XqGs76/PHOTO-2021-08-25-16-12-29.jpg",
  },
  {
    id: 7,
    imgSrc: "https://i.ibb.co/x8N5PBn/PHOTO-2021-08-25-16-12-29-2.jpg",
  },
  {
    id: 8,
    imgSrc: "https://i.ibb.co/jHK85JP/PHOTO-2021-08-25-16-12-30.jpg",
  },
  {
    id: 9,
    imgSrc: "https://i.ibb.co/QM0Q0YG/PHOTO-2021-08-25-16-12-30-2.jpg",
  },
  {
    id: 10,
    imgSrc: "https://i.ibb.co/4RZXHYv/PHOTO-2021-08-25-16-12-31.jpg",
  },
  {
    id: 11,
    imgSrc: "https://i.ibb.co/vd0Gz7y/PHOTO-2021-08-25-16-12-31-2.jpg",
  },
];

const cardContainer = document.querySelector(".card-container");

window.addEventListener("DOMContentLoaded", function () {
  displayBoardCards(boardImages);
});

function displayBoardCards(boardImages) {
  console.log("being called");
  let displayBoard = boardImages.map((boardMember) => {
    return ` <div class="card-board">
        <img class="board-image" src=${boardMember.imgSrc} alt="">
      </div>`;
  });

  displayBoard = displayBoard.join("");
  cardContainer.innerHTML = displayBoard;
}

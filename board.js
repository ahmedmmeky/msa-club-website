let boardImages = [
  {
    id: 2,
    imgSrc: "https://i.ibb.co/WHGwDFK/2.png",
  },
  {
    id: 3,
    imgSrc: "https://i.ibb.co/z4pmVtC/3.png",
  },
  {
    id: 5,
    imgSrc: "https://i.ibb.co/y5M3GB2/4.png",
  },
  {
    id: 4,
    imgSrc: "https://i.ibb.co/DkFStyz/5.png",
  },
  {
    id: 6,
    imgSrc: "https://i.ibb.co/6vwz1X9/6.png",
  },
  {
    id: 7,
    imgSrc: "https://i.ibb.co/VNYt7z0/7.png",
  },
  {
    id: 8,
    imgSrc: "https://i.ibb.co/D1QqBFC/8.png",
  },
  {
    id: 9,
    imgSrc: "https://i.ibb.co/GszmBrT/9.png",
  },
  {
    id: 10,
    imgSrc: "https://i.ibb.co/6BTk9vp/10.png",
  },
  {
    id: 11,
    imgSrc: "https://i.ibb.co/nf4TnDx/11.png",
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

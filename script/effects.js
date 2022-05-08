let awards = document.querySelector(".awards");

let prizeImages = [];
let prizeTitles = [];

let awardsImg = [
  { prize: "iPhoneX 64GB", bilde: "media/award1.png" },
  { prize: "Kinobilletter x 2", bilde: "media/award2.png" },
  { prize: "Restaurant Los Palmos", bilde: "media/award3.png" },
];

awardsImg.forEach((e) => {
  images = `${e.bilde}`;
  prizes = `${e.prize}`;
  prizeImages.push(images);
  prizeTitles.push(prizes);
});

console.log(prizeImages[0]);

// iterate prizeImages and create elements
let image;
for (i = 0; i < prizeImages.length; i++) {
  console.log(prizeImages[i]);
  image = document.createElement("div");
  image.setAttribute("class", "illustration");
  image.style.backgroundImage = "url(" + prizeImages[i] + ")";
  awards.appendChild(image);

  console.log("f4" + prizeTitles[i]);
  let prizeTitle = document.createElement("div");
  prizeTitle.setAttribute("class", "prizeTitle");
  prizeTitle.textContent = prizeTitles[i];
  image.appendChild(prizeTitle);
}

// new player added effect

let newContenter;
function showContenderMess() {
  newContender = document.createElement("h1");
  newContender.textContent = "NY UTFORDRER!";
  newContender.setAttribute("class", "newContender");
  document.body.appendChild(newContender);

  setTimeout(removeMessages, 1000);
}

function removeMessages() {
  document.body.removeChild(newContender);
  console.log("v6");
}


// select winner and show fireworks
const selWinnerBtn = document.querySelector('.selWinner'); 

const inputsPrizes = document.querySelector('.inputsPrizes');

const boxRankingAwards = document.querySelector('.boxRankingAwards');


selWinnerBtn.onclick = () => {
  console.log('t6');
  // remove all divs except Winner 
  inputsPrizes.style.display = 'none';
  boxRankingAwards.style.display = 'none';
  document.body.style.backgroundImage = "url('https://bestanimations.com/media/fireworks/1168512877ba-blue-red-fireworks-colorful-pretty-gif-pic.gif')";;
  document.body.style.backgroundColor = 'black';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';

  document.querySelector('#soundFire').play();
  document.querySelector('#soundMusic').play();


}

// DOM references

let inpName = document.querySelector(".inpName");
let inpPoints = document.querySelector(".inpPoints");

let inputSelectedName = document.querySelector(".selName");

let inpModifyPoints = document.querySelector(".modifyPoints");

let addPointsBtn = document.querySelector(".addPointsBtn");
let updateBtn = document.querySelector(".updateBtn");

let updateExistingScoresBtn = document.querySelector(".updateExistingScores");

let array = [];
let pointsArray = [];
let namesArray = [];

// Exisiting points and name
let points = [
  { name: "Lea", points: 10 },
  { name: "Marion", points: 180 },
  { name: "Mario", points: 3 },
  { name: "Jin", points: 6 },
  { name: "Ronald", points: 7 },
  { name: "Ludo", points: 8 },
  { name: "Raph", points: 32 },
];


// add new player and points
addPointsBtn.onclick = () => {
  iterateOliteralAgain();
  // make first letter upperCase for name input
  let capsInpName = inpName.value;
  const caps = capsInpName.charAt(0).toUpperCase() + capsInpName.slice(1);
  // push new player and point to object literal
  points.push({ name: caps, points: inpPoints.value });

  inpName.value = "";
  inpPoints.value = "";

  // sort ranking and display player and points
  points.sort((a, b) => {
    return b.points - a.points;
  });

  // display new contender message
  (() => {
    showContenderMess();
    // make button unclickable for .3
    addPointsBtn.style.pointerEvents = "none";

    // to avoid creating multiple elements b4 removeMess() is run..
    setTimeout(() => {
      addPointsBtn.style.pointerEvents = "auto";
    }, 3000);
  })();
};

// update ranking
updateBtn.onclick = () => {
  document.querySelector(".toppList").innerHTML = "";

  // autofocus again on inpName
  inpName.focus();

  // sort ranking and display player and points
  sortPoints();
  // iterate updated object literal & push to array
  iterateOliteral();

  // create element for each array items
  array.forEach((namePoints) => {
    let rank = document.createElement("p");

    document.querySelector(".toppList").appendChild(rank);
    rank.setAttribute("class", "ranking");
    rank.textContent += namePoints;
  });

  // update score leader
  document.querySelector(".nameAndPoints").textContent =
    array[0] + " -" + " poeng";


  console.log("just points " + pointsArray);
  console.log("just names " + namesArray);

  console.log("updated array " + array);
  array = [];
  setTimeout(() => {
    array = [];
    console.log("array is cleared");
  }, 5);
};

// loop through object literal
sortPoints();


function sortPoints() {
  points.sort((a, b) => {
    return b.points - a.points;
  });
}

// iterate object literal for all
iterateOliteral();
console.log(namesArray);
let selectedName;

// run compare selected name with array with keyup
updateExistingScoresBtn.addEventListener("click", compSelectNameNamesArray);

let capsinputSelectedName = inputSelectedName.value;



// compare input name and if same -> update points 
function compSelectNameNamesArray() {
  updateBtn.focus();
  iterateOliteralAgain();
  // if inpSel Name is namesArray [i] make changes
  for (i = 0; i < array.length; i++) {
    namesArray[i];

    if (inputSelectedName.value.toUpperCase() === namesArray[i].toUpperCase()) {
      console.log("xok45");
      selectedName = inputSelectedName.value;
      changeExisting();
      inputSelectedName.value = "";
      inpModifyPoints.value = "";
    } else {
      setTimeout(() => {
        inputSelectedName.value = "";
        inpModifyPoints.value = "";
      }, 5);
    }

    // remember that for loop and gives false for all other names than selected.
    // else if will not work.
  }
}

function changeExisting() {
  // method to find existing name in array
  let selected = points.find((i) => i.name.toUpperCase() === selectedName.toUpperCase());
  console.log("this is " + selectedName);

  // change name by refering to variable from find().
  console.log(selected.name);
  console.log(selected.points);
  selected.points = inpModifyPoints.value;

  sortPoints();
}

function iterateOliteral() {
  points.forEach((e) => {
    // console.log('e3 ' + `${e.name} ${e.points}`);
    names = `${e.name} ${e.points}`;

    // prepare for animation values
    onlyPoints = `${e.points}`;
    onlyNames = `${e.name}`;
    namesArray.push(onlyNames);
    pointsArray.push(onlyPoints);

    array.push(names); // iterated from points

    setTimeout(() => {
      array = [];
      console.log("array is cleared");
    }, 5);
  });
}

function iterateOliteralAgain() {
  points.forEach((e) => {
    // console.log('e3 ' + `${e.name} ${e.points}`);
    names = `${e.name} ${e.points}`;

    // prepare for animation values
    onlyPoints = `${e.points}`;
    onlyNames = `${e.name}`;
    namesArray.push(onlyNames);
    pointsArray.push(onlyPoints);

    array.push(names); // iterated from points

    setTimeout(() => {
      array = [];
      console.log("array is cleared");
    }, 5);
  });
}

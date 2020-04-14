/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

// get a random unique numbered array
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const createRandomArray = (num) => {
  let array = [];

  while (array.length < num) {
    let randomNum = getRandomInt(num);
    if (array.indexOf(randomNum) === -1) array.push(randomNum);
  }

  return array;
};

// CHECK; set that random array, to create more emojis
// CHECK; each line prints out an emoji length of the array
// refresh the screen each time it goes through the loop
// once done with loop should be at finished product

const sort = new Sort();
sort.sort(createRandomArray(11));

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

function unsortedCats(num) {
  let totalCats = "";
  for (let i = 0; i < num; i++) {
    totalCats += "🙀";
  }

  return totalCats;
}

function sortedCats(num) {
  let totalCats = "";
  for (let i = 0; i < num; i++) {
    totalCats += "😺";
  }

  return totalCats;
}

for (let x = 0; x < sort.unsortedArray.length; x++) {
  stringCats = unsortedCats(sort.unsortedArray[x]);

  if (x === 0) {
    document.getElementById("catPrint").innerHTML = stringCats;
  } else if (x === 1) {
    document.getElementById("catPrint1").innerHTML = stringCats;
  } else if (x === 2) {
    document.getElementById("catPrint2").innerHTML = stringCats;
  } else if (x === 3) {
    document.getElementById("catPrint3").innerHTML = stringCats;
  } else if (x === 4) {
    document.getElementById("catPrint4").innerHTML = stringCats;
  } else if (x === 5) {
    document.getElementById("catPrint5").innerHTML = stringCats;
  } else if (x === 6) {
    document.getElementById("catPrint6").innerHTML = stringCats;
  } else if (x === 7) {
    document.getElementById("catPrint7").innerHTML = stringCats;
  } else if (x === 8) {
    document.getElementById("catPrint8").innerHTML = stringCats;
  } else if (x === 9) {
    document.getElementById("catPrint9").innerHTML = stringCats;
  } else if (x === 10) {
    document.getElementById("catPrint10").innerHTML = stringCats;
  }
}

for (let x = 0; x < sort.array.length; x++) {
  stringCats = sortedCats(sort.array[x]);

  if (x === 0) {
    document.getElementById("catPrint11").innerHTML = stringCats;
  } else if (x === 1) {
    document.getElementById("catPrint12").innerHTML = stringCats;
  } else if (x === 2) {
    document.getElementById("catPrint13").innerHTML = stringCats;
  } else if (x === 3) {
    document.getElementById("catPrint14").innerHTML = stringCats;
  } else if (x === 4) {
    document.getElementById("catPrint15").innerHTML = stringCats;
  } else if (x === 5) {
    document.getElementById("catPrint16").innerHTML = stringCats;
  } else if (x === 6) {
    document.getElementById("catPrint17").innerHTML = stringCats;
  } else if (x === 7) {
    document.getElementById("catPrint18").innerHTML = stringCats;
  } else if (x === 8) {
    document.getElementById("catPrint19").innerHTML = stringCats;
  } else if (x === 9) {
    document.getElementById("catPrint20").innerHTML = stringCats;
  } else if (x === 10) {
    document.getElementById("catPrint21").innerHTML = stringCats;
  }
}

function animatedCats(num) {
  let totalCats = "";
  for (let i = 0; i < num; i++) {
    totalCats += "😺";
  }

  return totalCats;
}

function animatedCatsClick() {
  for (let x = 0; x < sort.animatedArray.length; x++) {
    stringCats = animatedCats(sort.animatedArray[x]);

    if (x === 0) {
      document.getElementById("catPrint22").innerHTML = stringCats;
    } else if (x === 1) {
      document.getElementById("catPrint23").innerHTML = stringCats;
    } else if (x === 2) {
      document.getElementById("catPrint24").innerHTML = stringCats;
    } else if (x === 3) {
      document.getElementById("catPrint25").innerHTML = stringCats;
    } else if (x === 4) {
      document.getElementById("catPrint26").innerHTML = stringCats;
    } else if (x === 5) {
      document.getElementById("catPrint27").innerHTML = stringCats;
    } else if (x === 6) {
      document.getElementById("catPrint28").innerHTML = stringCats;
    } else if (x === 7) {
      document.getElementById("catPrint29").innerHTML = stringCats;
    } else if (x === 8) {
      document.getElementById("catPrint30").innerHTML = stringCats;
    } else if (x === 9) {
      document.getElementById("catPrint31").innerHTML = stringCats;
    } else if (x === 10) {
      document.getElementById("catPrint32").innerHTML = stringCats;
    }
  }
  sort.sortSlow();
}

setInterval(animatedCatsClick, 2000);

const title = createCheesyTitle(sort.returnValue("Selection Sort Algorithm"));
document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
*/

function changeTitle(event) {
  event.preventDefault();
  // console.log('What is an event?', event);
}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});

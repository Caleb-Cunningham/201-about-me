//functions
function firstQuestion() {
  let wasIborn = true
}
firstQuestion();


function secondQuestion() {
  let doMusic = true
}
secondQuestion();


function thirdQuestion() {
  let publicSchool = true
}
thirdQuestion();


function fourthQuestion() {
  let am22 = true
}
fourthQuestion();


function fifthQuestion() {
  let whatAnswer = true
}
fifthQuestion();


function isItRed() {
  let answers = ['Roses', 'Apple']
}
isItRed();


function numberGuesser() {
  let correctNumber = 3;
}
numberGuesser();

function scoreTracker() {
  let x = 0;
}
scoreTracker();


//score variable
let x = 0;
// Three prompts
let nameEntered = prompt("Please type your name here");
alert("Ok let's see how many questions you can get right" + " " + nameEntered);
// console.log(nameEntered);


let wasIborn = true;


while (wasIborn) {
  let wasBorn = prompt("Was I born in 2003");
  if (wasBorn.toUpperCase() === 'Y' || wasBorn.toUpperCase() === "YES") {
    if (wasIborn === true);
    console.log(x++)
    break;
    //wasIborn = false;   
    }
  }


let doMusic = true;


while (doMusic) {
  let doMusicYes = prompt("Do I like instrumental music?");
  if (doMusicYes.toUpperCase() === 'Y' || doMusicYes.toUpperCase() === "YES") {
    console.log(x++)
    doMusic = false;
  }
}

let publicSchool = true;

while (publicSchool) {
  let homeSchool = prompt("Did i go to public school?");
  if (homeSchool.toUpperCase() === 'N' || homeSchool.toUpperCase() === "NO") {
    console.log(x++)
    publicSchool = false;
  }
}


let am22 = true;

while (am22) {
  let amNot22 = prompt("I am 22 years old?");
  if (amNot22.toUpperCase() === 'N' || amNot22.toUpperCase() === "NO") {
    console.log(x++)
    am22 = false;
  }
}


let whatAnswer = true;

while (whatAnswer) {
  let whatIsAnswer = prompt("Is the answer yes or no?");
  if (whatIsAnswer.toUpperCase() === 'Y' || whatIsAnswer.toUpperCase() === "YES") {
    console.log(x++)
    whatAnswer = false;
  }
}






let correctNumber = 3;
//let numberGuess = true;

for (let i = 0; i < 4; i++) {
  let numberSaved = prompt("Pick a number between 1 and 5");
  if (numberSaved == correctNumber) {
    console.log(x++)
    alert("That was the correct number! good job" + " " + nameEntered);
    break;
  }
  else if (numberSaved < correctNumber) {
    alert("Number is too low")
  }
  else if (numberSaved > correctNumber) {
    alert("Number is too high")
  }


}


let answers = ['Roses', 'Apple'];
for (let i = 0; i < 6; i++) {
  let questionInput = prompt("Which of these are naturally be red: 'Roses' 'Ocean' 'Apple' 'Truck' 'Sky' Select only one : ");
  if (answers.indexOf(questionInput) == -1) {
    alert("Wrong Answer better luck next time");
  }
  else {
    console.log(x++);
    alert("Correct Answer! nice job" + " " + nameEntered);
    break;
  }

}

let finished = prompt("Nice job you finished with" + " " + x);






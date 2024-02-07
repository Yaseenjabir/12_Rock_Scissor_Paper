const choices = document.querySelectorAll(".choices");
const theResult = document.querySelector(".result");
const theMyScore = document.querySelector("#p1");
const theCompScore = document.querySelector("#p2");
const showChoices = document.querySelector(".showChoices")
// console.log(theResult);


let myChoice;
let compChoice;
let myScore = 0;
let compScore = 0;

const computerChoice = ()=>{
  const choices = ['rock', 'paper', "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

choices.forEach(elements =>{
  elements.addEventListener('click',()=>{
    
    myChoice = elements.getAttribute("id")
    compChoice = computerChoice();
    const result = winner();
    // console.log("Your Choice is = ",myChoice)
    // console.log("Computer Choice is =", compChoice)
    // console.log(result) 
    if(result === "Draw"){
      theResult.textContent = 'Draw';
      theResult.style.backgroundColor = "grey"
      showChoices.style.display = "flex";
      showChoices.textContent = `Match Draw`
    }
    if(result === "You won computer losed"){
      theResult.textContent = 'You won computer losed';
      theResult.style.backgroundColor = "green";
      myScore++
      theMyScore.textContent = myScore;

      showChoices.style.display = "flex";
      showChoices.textContent = `Your Choice was [${myChoice}] and Computer Choice was [${compChoice}]`

    }
    if(result === "You losed computer won"){
      theResult.textContent = 'You losed computer won';
      theResult.style.backgroundColor = "red";
      compScore++;
      theCompScore.textContent = compScore;

      showChoices.style.display = "flex";
      showChoices.textContent = `Your Choice was [${myChoice}] and Computer Choice was [${compChoice}]`
    }
  })
});

const winner = ()=>{
  let result = "";
  if(myChoice === compChoice){
    result = "Draw";
  }

  //my choices
  if(myChoice === "rock" && compChoice === "scissor"){
    result = "You won computer losed";
  }
  if(myChoice === "scissor" && compChoice === "paper"){
    result = "You won computer losed"
  }
  if(myChoice === "paper" && compChoice === "rock"){
    result = "You won computer losed";
  }

  //comp choices
  if(compChoice === "rock" && myChoice === "scissor"){
    result = "You losed computer won";
  }
  if(compChoice === "scissor" && myChoice === "paper"){
    result = "You losed computer won"
  }
  if(compChoice === "paper" && myChoice === "rock"){
    result = "You losed computer won";
  }
  return result;
}
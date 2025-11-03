
const buttons = document.querySelectorAll("button");
const h4 = document.querySelector("h4");
let yourscore = document.querySelector("#usersc");
let computerscore = document.querySelector("#compsc");

let userscore = 0;
let compscore = 0;


buttons.forEach(button => {
    button.addEventListener("click", () => {
    const usermove = button.id;
    const computermove = getcomputermove();
    const result = game(usermove, computermove);
    h4.innerText = `You choose ${usermove} , computer choose ${computermove} , ${result}`;
    yourscore.innerText = userscore;
    computerscore.innerText = compscore;
    });
});

function getcomputermove() {
const randmove = ["rock" , "paper" , "scissor"];
const i = Math.floor(Math.random() * 3);
return randmove[i];
}
// console.log(randmove[i]);

function game(user, computer) {
    if(user === computer) {
return "It was a tie";
    }
    if((user === "rock" && computer === "scissor") || (user === "paper" && computer === "rock") || (user === "scissor" && computer === "paper")) {
        userscore++;
      return  "You Win";
       
    //    console.log(yourscore);
    } else {
        compscore++;
        return "You Lose";
       
        //  console.log(computerscore);
    }
    }


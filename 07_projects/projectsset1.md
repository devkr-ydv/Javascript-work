# Projects related to DOM

## project link


# Solution Code

## project 1

```javascript

  console.log("Dev")
  // select all the buttons and body

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// can put forEach in NodeList
buttons.forEach(function (button) {
  console.log(button);
  // Event Listner
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


  ```

  ## project 2 Solution
  
  ```javascript
 const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
   e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  

   
  if(height === ''  || height < 0 || isNaN(height)){
      results.innerHTML = 'Please give a valid height';

  }
 
    else if(weight === ''  || weight < 0 || isNaN(weight)){
    results.innerHTML = 'Please give a valid weight';
    }
      else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
         // show the result 
         results.innerHTML = `<span>${bmi}  </span>  `
      }  
// based on the bmi value , classify it as underweight, overweight, normal

});


  ```

## project 3 Solution Code Clock
```javascript
 const clock = document.getElementById('clock');


setInterval(function(){
  let date = new Date();
//console.log(date.toLocaleTimeString());
 clock.innerHTML = date.toLocaleTimeString();
} , 1000);

```

## project 4 Solution NumberGuessing
```javascript


// input type ="submit" can also be taken as  button

// button is taken as type = "submit"

let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // Print the message of the correctness of the input
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO High`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}    `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // direct interaction with dom
  lowOrHi.innerHTML = `<h2>${message} </h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}   `;

    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```
## project 5 Solution
```javascript

// generete a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());
let RenewColor;
const startChangingColor = function(){
  if(!RenewColor){
RenewColor = setInterval(changeBgColor,1000);
  }
function changeBgColor(){ document.body.style.backgroundColor = randomColor();
}
};

const stopChangingColor = function(){
  clearInterval(RenewColor);
  RenewColor = null;

};
document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)



```
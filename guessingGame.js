let guess;
let guessesCount = 0;
let number;

number = Math.floor(Math.random() * (100 + 1));

guess = +prompt(`Guess a number (its your ${guessesCount} attempt)`);

while (guess !== number) {
  guess = +prompt(`Incorect, your guess of ${guess} is too ${guess > number ? 'big' : 'small'}.
    Try again (its your ${guessesCount} attempt).`);
  guessesCount++;
}

alert(`Congrats, ${guess} is the number!`);

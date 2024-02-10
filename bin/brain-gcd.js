#!/usr/bin/env node

import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const getRandomNumber = (limit) => Math.floor(Math.random() * limit);

const playGame = () => {
  let correctAnswersCount = 0;
  const questionsCount = 3;

  while (correctAnswersCount < questionsCount) {
    const number1 = getRandomNumber(100);
    const number2 = getRandomNumber(100);

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = gcd(number1, number2);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();

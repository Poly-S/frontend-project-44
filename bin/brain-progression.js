#!/usr/bin/env node

import readlineSync from 'readline-sync';

function generateProgression(start, diff, length) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * diff);
  }
  return progression;
}

function hideElement(progression, position) {
  const hiddenProgression = [...progression];
  hiddenProgression[position] = '..';
  return hiddenProgression;
}

function playProgressionGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const numberOfRounds = 3;
  const minLength = 5;
  const maxLength = 10;
  const minDiff = 1;
  const maxDiff = 9;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const start = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    const diff = Math.floor(Math.random() * (maxDiff - minDiff + 1) + minDiff);
    const length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    const position = Math.floor(Math.random() * length);
    const progression = generateProgression(start, diff, length);
    const hiddenProgression = hideElement(progression, position);
    const correctAnswer = progression[position];

    console.log(`Question: ${hiddenProgression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playProgressionGame();

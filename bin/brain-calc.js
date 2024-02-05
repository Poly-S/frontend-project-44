#!/usr/bin/env node

import { greetAndGetName, displayGreeting, displayQuestion, getUserAnswer, displayCorrectAnswer, displayIncorrectAnswer, displayCongratulations, displayErrorMessage } from '../src/games/index.js';
import { generateRandomNumber, generateRandomOperator, calculateExpression } from '../src/games/calcGame.js';

function playCalcGame() {
  const name = greetAndGetName();
  displayGreeting(name);

  for (let i = 0; i < 3; i++) {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operator = generateRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculateExpression(num1, num2, operator);

    displayQuestion(question);
    const userAnswer = getUserAnswer();

    if (userAnswer === correctAnswer) {
      displayCorrectAnswer();
    } else {
      displayIncorrectAnswer(userAnswer, correctAnswer);
      displayErrorMessage(name);
      return;
    }
  }

  displayCongratulations(name);
};

playCalcGame();
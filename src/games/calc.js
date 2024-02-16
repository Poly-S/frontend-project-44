import { getRandomNumber } from '../utils.js';
import greetAndGetLogic from '../gameLogic.js';

const description = 'What is the result of the expression?';

const generateRandom = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = ['+', '-', '*'][getRandomNumber(0, 2)];

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = num1 * num2;
      break;
  }

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(result);
  return [question, correctAnswer];
};

const playCalcGame = () => {
  const rounds = [];
  const roundsNumber = 3;

  for (let i = 0; i < roundsNumber; i += 1) {
    rounds.push(generateRandom());
  }

  greetAndGetLogic(rounds, description);
};

export default playCalcGame;

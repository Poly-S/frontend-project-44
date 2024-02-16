import { getRandomNumber } from '../utils.js';
import greetAndGetLogic, { roundsNumber } from '../gameLogic.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const correctAnswer = String(gcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, correctAnswer];
};

const playGcdGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds.push(generateRound());
  }
  return greetAndGetLogic(rounds, description);
};

export default playGcdGame;

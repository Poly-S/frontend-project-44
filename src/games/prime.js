import { getRandomNumber } from '../utils.js';
import greetAndGetLogic, { roundsNumber } from '../gameLogic.js';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds.push(generateRound());
  }
  return greetAndGetLogic(rounds, description);
};

export default playPrimeGame;

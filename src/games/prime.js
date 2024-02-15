import { getRandomNumber } from '../src/utils.js';
import greetAndGetLogic, { roundsNumber } from '../src/gameLogic.js';

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

const generateQuestion = () => {
  const number = getRandomNumber(1, 100);
  const question = `Is ${number} a prime number?`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
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

export default playPrimeGame();

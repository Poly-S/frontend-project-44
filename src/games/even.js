import { getRandomNumber } from '../utils.js';
import greetAndGetLogic from '../gameLogic.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => {
  const rounds = [];
  const roundsNumber = 3; 

  for (let i = 0; i < roundsNumber; i += 1) {
    rounds.push(generateRound());
  }

  greetAndGetLogic(rounds, description);
};

export default playEvenGame;

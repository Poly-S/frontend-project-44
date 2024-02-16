import { getRandomNumber } from '../utils.js';
import greetAndGetLogic from '../gameLogic.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const roundsNumber = 3;

const generateRound = () => {
  const step = getRandomNumber(1, 100);
  const resultProgression = [];
  const startNumber = getRandomNumber(1, 1000);

  for (let i = 1; i <= progressionLength; i += 1) {
    resultProgression.push(startNumber + i * step);
  }

  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(resultProgression[hiddenIndex]);
  resultProgression[hiddenIndex] = '..';

  const question = resultProgression.join(' ');

  return [question, correctAnswer];
};

const playProgressionGame = () => {
  const rounds = [];

  for (let i = 0; i < roundsNumber; i += 1) {
    rounds.push(generateRound());
  }

  return greetAndGetLogic(rounds, description);
};

export default playProgressionGame;

import readlineSync from 'readline-sync';

export const greetAndGetName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const displayGreeting = (gameName) => {
  console.log(`Welcome to the ${gameName}!`);
};

export const displayGreetings = (name) => {
  console.log(`Hello, ${name}!`);
};

export const displayQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const displayCorrectAnswer = () => {
  console.log('Correct!');
};

export const displayIncorrectAnswer = (userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};

export const displayErrorMessage = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export const displayCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};
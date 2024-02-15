import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

const greetAndGetLogic = (rounds, description) => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
	console.log(description);

	for (let i = 0; i < roundsNumber; i += 1) {
		const [question, answer] = rounds[i];
		console.log(`Question: ${question}`);
		const userAnswer = readlineSync.question('Your answer: ');

		if (userAnswer === answer) {
			console.log('Correct!');
		} else {
			console.log(`'${userAnswer}' is the wrong answer. The correct answer was '${answer}'.`);
			console.log(`Let's try again, ${name}!`);
			return;
		}
	}
	console.log(`Congratulations, ${name}! You've answered all the questions correctly.`);
};

export default greetAndGetLogic;

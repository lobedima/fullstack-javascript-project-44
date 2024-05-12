import readlineSync from 'readline-sync';

const countRound = 3;

export default (description, getQuestionAndAnswer) => { 
console.log('Welcome to the Brain Games!'); //выполняется

const name = readlineSync.question('May I have your name? ');// выполняется

console.log(`Hello, ${name}!`); // выполняется

console.log(description); // выполняется

for (let i = 0; i < countRound; i++) {
    const [question, correctAnswer] = getQuestionAndAnswer(); 
    console.log(`Qestion: ${question}`)

    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
        console.log(`Let's try again, ${name}!`);
    }
}
console.log(`Congratulations, ${name}!`)

}
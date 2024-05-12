import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const randomInteger = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

const nod = (x, y) => {
    if (y > x) return nod(y, x);
    if (!y) return x;
    return nod(y, x % y);
};

const getQuestionAndAnswer = () => {
    const num1 = randomInteger();
    const num2 = randomInteger();
    const question = `${num1} ${num2}`;
    const correctAnswer = nod(num1, num2);
    return [question, correctAnswer];
};

export default () => {
    game(description, getQuestionAndAnswer);
};
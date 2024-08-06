import game from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const nod = (x, y) => {
    if (y > x) return nod(y, x);
    if (!y) return x;
    return nod(y, x % y);
};

const getQuestionAndAnswer = () => {
    const num1 = getRandomInRange();
    const num2 = getRandomInRange();
    const question = `${num1} ${num2}`;
    const correctAnswer = nod(num1, num2);
    return [question, correctAnswer];
};

export default () => {
    game(description, getQuestionAndAnswer);
};
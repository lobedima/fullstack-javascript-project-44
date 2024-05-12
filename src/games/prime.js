import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomInteger = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

const getFindSimpleNum = (num) => {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
        if (num % i === 0) return false;
    }
    return true;
};

const getQuestionAndAnswer = () => {
    const num = randomInteger (1, 100);
    const correctAnswer = getFindSimpleNum(num) === true ? 'yes' : 'no';
    return [num, correctAnswer];
};

export default () => {
    game(description, getQuestionAndAnswer)
}
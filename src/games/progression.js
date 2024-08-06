import game from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length = 10) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(start + step * i);
    }
    return progression;
};

const getQuestionAndAnswer = () => {
    const start = getRandomInRange();
    const step = getRandomInRange();
    const progression = generateProgression(start, step);
    const hiddenIndex = getRandomInRange(0, progression.length - 1);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
};

export default () => {
    return game(description, getQuestionAndAnswer);
};
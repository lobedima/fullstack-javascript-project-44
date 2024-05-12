import game from '../index.js';

const description = 'What number is missing in the progression?';

const randomInteger = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

const generateProgression = (start, step, length = 10) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(start + step * i);
    }
    return progression;
};

const getQuestionAndAnswer = () => {
    const start = randomInteger();
    const step = randomInteger();
    const progression = generateProgression(start, step);
    const hiddenIndex = randomInteger(0, progression.length - 1);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
};

export default () => {
    return game(description, getQuestionAndAnswer);
};
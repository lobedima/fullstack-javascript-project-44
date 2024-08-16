import game from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomInRange();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
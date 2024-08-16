import game from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getFindSimpleNum = (num) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const num = getRandomInRange();
  const correctAnswer = getFindSimpleNum(num) === true ? 'yes' : 'no';
  return [num, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
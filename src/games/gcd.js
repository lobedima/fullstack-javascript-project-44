import game from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) { return num2; } return getGcd(num2 % num1, num1);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};

import game from '../index.js';

const description = 'What is the result of the expression?';

const randomSymbol = () => {
    const symbolMath = ['-', '+', '*'];
    return symbolMath[random(0, symbolMath.length - 1)];
  };

const random = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

const randomInteger= (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      Nan
  }
};

const num1 = randomInteger(1, 100);

const num2 = randomInteger(1, 100);

const operator = randomSymbol();

const getQuestionAndAnswer = () => {
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculation(num1, num2, operator).toString();
  return [question, correctAnswer];
};

export default () => {
    game(description, getQuestionAndAnswer)
};

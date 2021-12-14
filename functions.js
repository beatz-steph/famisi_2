import db from './db';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const generateQuiz = difficulty => {
  const difficulty_list = db[difficulty];
  const list = [];
  const quiz = [];

  while (list.length < 6) {
    const number = getRndInteger(0, difficulty_list.length);
    if (!list.includes(number)) {
      list.push(number);
    }
  }

  list.map(item => {
    quiz.push(difficulty_list[item]);
  });

  return quiz;
};

export const calculateResult = (quiz, answers) => {
  let result = 0;

  quiz.map((question, index) => {
    if (question.options[question.correctIndex] === answers[index]) {
      result += 1;
    }
  });

  return result;
};

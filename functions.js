import AsyncStorage from '@react-native-async-storage/async-storage';
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

export const storeAppData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('appData', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getAppData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('appData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const errorHandler = (error, defaultMessage = 'An error occured') => {
  if (!error) return;
  let errorMessage = defaultMessage;

  if (
    error.response &&
    error.response.message &&
    typeof error.response.message === 'string'
  ) {
    errorMessage = error.response.message;
  }

  if (
    error.response &&
    error.response.data &&
    error.response.data.message &&
    typeof error.response.data.message === 'string'
  ) {
    errorMessage = error.response.data.message;
  }

  if (
    error.response &&
    error.response.data &&
    error.response.data.message &&
    error.response.data.message.message &&
    typeof error.response.data.message.message === 'string'
  ) {
    errorMessage = error.response.data.message.message;
  }

  return errorMessage;
};

export const asyncCatch = async (
  cb,
  defaultMessage = 'Something went wrong',
  errCb,
) => {
  try {
    await cb();
  } catch (err) {
    const errorMessage = errorHandler(err, defaultMessage);
    errCb(err, errorMessage);
  }
};

import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuizContext from './quizContext';

// import pages
import Setup from './setup';
import Quiz from './quiz';
import Success from './success';

// set up navigation
const Stack = createNativeStackNavigator();

const PracticeZone = ({navigation, setShowBottomNavBar}) => {
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setShowBottomNavBar(false);
  });
  return (
    <QuizContext.Provider value={{quiz, setQuiz, answers, setAnswers}}>
      <Stack.Navigator
        initialRouteName="SetUp"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SetUp">
          {props => <Setup navigation={navigation} />}
        </Stack.Screen>
        <Stack.Screen name="Quiz">
          {props => <Quiz navigation={navigation} />}
        </Stack.Screen>
        <Stack.Screen name="Success">
          {props => <Success navigation={navigation} />}
        </Stack.Screen>
      </Stack.Navigator>
    </QuizContext.Provider>
  );
};

export default PracticeZone;

import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import pages
import Setup from './setup';
import Quiz from './quiz';
import Success from './success';
import Waiting from './waiting';

// set up navigation
const Stack = createNativeStackNavigator();

const PracticeZone = ({navigation, setShowBottomNavBar}) => {
  useEffect(() => {
    setShowBottomNavBar(false);
  });
  return (
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
      <Stack.Screen name="Waiting">
        {props => <Waiting navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default PracticeZone;

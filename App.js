import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import pages
import Intro from './pages/intro';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Home from './pages/home';
import Practice from './pages/practice';

// set up navigation
import MyTabBar from './components/tabBar';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [initial, setInitial] = useState('auth');
  const [auth, setAuth] = useState(false);
  const [showBottomNavBar, setShowBottomNavBar] = useState(true);
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {auth && initial !== 'auth' ? (
          <Tab.Navigator
            screenOptions={{headerShown: false}}
            tabBar={props => null}>
            <Tab.Screen name="Home">
              {props => (
                <Home {...props} setShowBottomNavBar={setShowBottomNavBar} />
              )}
            </Tab.Screen>
            <Tab.Screen name="Practice">
              {props => (
                <Practice
                  {...props}
                  setShowBottomNavBar={setShowBottomNavBar}
                />
              )}
            </Tab.Screen>
          </Tab.Navigator>
        ) : null}

        {auth && initial !== 'home' ? (
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" setInitial={setInitial}>
              {props => <SignIn {...props} setInitial={setInitial} />}
            </Stack.Screen>

            <Stack.Screen name="SignUp">
              {props => <SignUp {...props} setInitial={setInitial} />}
            </Stack.Screen>
          </Stack.Navigator>
        ) : null}

        {!auth ? <Intro setAuth={setAuth} /> : null}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;

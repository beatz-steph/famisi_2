import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNetInfo} from '@react-native-community/netinfo';

// import pages
import Intro from './pages/intro';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Home from './pages/home';
import Play from './pages/play';
import Games from './pages/games';

// quiz context
import QuizContext from './context/quizContext';
import AppContext from './context/appContext';
import {getAppData} from './functions';

// set up navigation
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const netInfo = useNetInfo();

  const [initial, setInitial] = useState(true);
  const [auth, setAuth] = useState(null);
  const [showBottomNavBar, setShowBottomNavBar] = useState(true);

  // states for quiz
  const [play, setPlay] = useState('');
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendsList, setFriendsList] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'First Item',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG9xj0XIQP_3kdm-LZelILnKlD4wvQLrJqL7S5cIweIeUr1amHL1YK-zUnFsgV2RjwLc&usqp=CAU',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
      imageUrl: '',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
      imageUrl: '',
    },
  ]);

  const resetAllQuizInfo = () => {
    setQuiz([]);
    setAnswers([]);
    setSelectedFriend([]);
  };

  useEffect(() => {
    getAppData;
  });

  return (
    <AppContext.Provider
      value={{
        auth,
        setAuth,
        initial,
        setInitial,
        isConnected: netInfo.isConnected,
      }}>
      <QuizContext.Provider
        value={{
          play,
          setPlay,
          quiz,
          setQuiz,
          answers,
          setAnswers,
          selectedFriend,
          setSelectedFriend,
          friendsList,
          setFriendsList,
          resetAllQuizInfo,
        }}>
        <NavigationContainer>
          <NativeBaseProvider>
            {auth && !initial ? (
              <Tab.Navigator
                screenOptions={{headerShown: false}}
                tabBar={props => null}>
                <Tab.Screen name="Home">
                  {props => (
                    <Home
                      {...props}
                      setShowBottomNavBar={setShowBottomNavBar}
                    />
                  )}
                </Tab.Screen>
                <Tab.Screen name="Play">
                  {props => (
                    <Play
                      {...props}
                      setShowBottomNavBar={setShowBottomNavBar}
                    />
                  )}
                </Tab.Screen>

                <Tab.Screen name="Games">
                  {props => (
                    <Games
                      {...props}
                      setShowBottomNavBar={setShowBottomNavBar}
                    />
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            ) : null}

            {!auth && !initial ? (
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

            {!auth && initial ? <Intro setAuth={setAuth} /> : null}
          </NativeBaseProvider>
        </NavigationContainer>
      </QuizContext.Provider>
    </AppContext.Provider>
  );
}

export default App;

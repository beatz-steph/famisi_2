import React from 'react';
import {NativeBaseProvider} from 'native-base';

// import pages
// import Intro from './pages/intro';
// import SignIn from './pages/signin';
// import SignUp from './pages/signup';
import Home from './pages/home';

// set up navigation

function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}

export default App;

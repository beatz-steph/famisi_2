import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box} from 'native-base';

// image

// component
import Header from '../components/header';
import Zone from '../components/zone';
import MyTabBar from '../components/tabBar';

const Home = ({navigation, setShowBottomNavBar}) => {
  return (
    <SView>
      {/* Header */}
      <Header />

      {/* zones */}

      <Zone navigation={navigation} />

      {/* Navigation */}
      <MyTabBar navigation={navigation} active="Home" />
    </SView>
  );
};

const SView = styled(Box)`
  ${[t.mB4, t.bgWhite, t.p2, t.hFull, t.relative]}
`;

export default Home;

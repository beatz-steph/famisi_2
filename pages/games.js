import React, {useEffect} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Text} from 'native-base';

// image
const games = [{}, {}, {}];

// component
import Header from '../components/header';
import MyTabBar from '../components/tabBar';

import Gamecard from '../components/gamecard';

const Games = ({navigation, setShowBottomNavBar}) => {
  return (
    <SView>
      {/* Header */}
      <Header />

      <Title>Games </Title>
      {/* zones */}

      {games.map((item, index) => {
        return <Gamecard />;
      })}

      {/* Navigation */}
      <MyTabBar navigation={navigation} active="Games" />
    </SView>
  );
};

const SView = styled(Box)`
  ${[t.mB4, t.bgWhite, t.p2, t.hFull, t.relative]}
`;

const Title = styled(Text)`
  ${[t.text4xl, t.fontBold, t.mL4, t.mT2, t.mB8]}
`;

export default Games;

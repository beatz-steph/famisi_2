import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Image, Box} from 'native-base';

// images
const Home = require('../assets/home.png');
const Board = require('../assets/board.png');

const MyTabBar = ({navigation, showBottomNavBar}) => {
  return (
    <FooterHolder showBottomNavBar={showBottomNavBar}>
      <FooterInner>
        <OptionHolder>
          <OptionActive>
            <HomeImage source={Home} alt="home" />
          </OptionActive>
        </OptionHolder>
        <OptionHolder>
          <HomeImage source={Board} alt="board" />
        </OptionHolder>
      </FooterInner>
    </FooterHolder>
  );
};

// <ButtonBody
//   title="Home"
//   onPress={() => {
//     // Navigate using the `navigation` prop that you received
//     navigation.navigate('SomeScreen');
//   }}
// />

const FooterHolder = styled(Box)`
  ${([t.w20, t.pX4, t.pY2],
  {
    position: 'absolute',
    left: 8,
    bottom: 10,
    width: '100%',
  })};
`;

const FooterInner = styled(Box)`
  ${[
    t.flex,
    t.flexRow,
    t.justifyAround,
    t.bgGreen500,
    t.pY2,
    t.pX8,
    t.roundedSm,
    t.mXAuto,
    t.itemsCenter,
  ]}
`;

const OptionHolder = styled(Box)`
  ${[]}
`;

const OptionActive = styled(Box)`
  ${[
    t.h10,
    t.w10,
    t.roundedFull,
    t.bgGray700,
    t.flex,
    t.itemsCenter,
    t.justifyCenter,
  ]};
`;

const HomeImage = styled(Image)`
  ${[t.h6, t.objectContain, t.w10]}
`;

const ButtonText = styled(Text)`
  ${[t.textWhite, t.textXl, t.itemsCenter, t.fontNormal]}
`;

export default MyTabBar;

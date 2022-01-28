import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Image, Box, Pressable} from 'native-base';
import {useContext} from 'react/cjs/react.development';
import AppContext from '../context/appContext';

// images
const Home = require('../assets/home.png');
const Board = require('../assets/board.png');

const MyTabBar = ({navigation, showBottomNavBar, active}) => {
  const {setGameLoad} = useContext(AppContext);
  return (
    <FooterHolder showBottomNavBar={showBottomNavBar}>
      <FooterInner>
        <OptionHolder
          onPress={() => {
            setGameLoad(false);
            navigation.navigate('Home');
          }}>
          <OptionActive active={active === 'Home'}>
            <HomeImage source={Home} alt="home" />
          </OptionActive>
        </OptionHolder>
        <OptionHolder
          onPress={() => {
            setGameLoad(false);
            navigation.navigate('Games');
          }}>
          <OptionActive active={active === 'Games'}>
            <HomeImage source={Board} alt="board" />
          </OptionActive>
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

const OptionHolder = styled(Pressable)`
  ${[]}
`;

const OptionActive = styled(Box)`
  ${[
    t.h10,
    t.w10,
    t.roundedFull,

    {background: props => (props.active ? '#364956' : '#11111100')},
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

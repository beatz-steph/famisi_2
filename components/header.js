import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Box, Image} from 'native-base';

// image
const Heart = require('../assets/heart.png');
const Coin = require('../assets/coin.png');

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderAvatar />

      <HeaderPoints>
        <HeaderPointsIcon source={Coin} alt="coin" />
        <HeaderPointsText>5,200</HeaderPointsText>
      </HeaderPoints>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Box)`
  ${[
    t.h16,
    t.roundedSm,
    {backgroundColor: '#364956'},
    t.flex,
    t.flexRow,
    t.itemsCenter,
    t.pX8,
    t.justifyBetween,
  ]}
`;

const HeaderAvatar = styled(Box)`
  ${[t.w10, t.h10, t.roundedFull, t.bgGray300, {borderRadius: 50}]}
`;

const HeaderPoints = styled(Box)`
  ${[t.flex, t.flexRow, t.itemsCenter]}
`;

const HeaderPointsText = styled(Text)`
  ${[t.textWhite, t.fontSemibold]}
`;

const HeaderPointsIcon = styled(Image)`
  ${[t.h8, t.objectContain, t.w10]}
`;

export default Header;

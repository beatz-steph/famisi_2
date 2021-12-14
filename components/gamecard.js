import React, {useEffect} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Text, Pressable, Image} from 'native-base';

const PonitImage = require('../assets/coin.png');

const Gamecard = () => {
  return (
    <Wrapper>
      <ImageHolder>
        <ImageItem alt="avatar" />
        <ImageText>VS</ImageText>
        <ImageItem alt="avatar" />
      </ImageHolder>
      <OtherHolder>
        <Status> ongoing</Status>
        <PointsIcon source={PonitImage} alt="coin" />
      </OtherHolder>
    </Wrapper>
  );
};

const Wrapper = styled(Pressable)`
  ${[
    t.bgGray200,
    t.h16,
    t.wFull,
    t.border2,
    t.borderGray400,
    t.rounded,
    t.mB4,
    t.flex,
    t.flexRow,
    t.itemsCenter,
    t.justifyBetween,
  ]}
`;

const ImageHolder = styled(Box)`
  ${[t.flex, t.flexRow, t.itemsCenter, t.pX4]}
`;

const OtherHolder = styled(Box)`
  ${[t.flex, t.flexRow, t.itemsCenter]}
`;

const ImageItem = styled(Image)`
  ${[t.w10, t.h10, t.roundedFull, t.bgGray700]}
`;
const ImageText = styled(Text)`
  ${[t.fontBold, t.mX2, t.text2xl, t.italic]}
`;
const Status = styled(Text)`
  ${[t.italic]}
`;

const PointsIcon = styled(Image)`
  ${[t.h8, t.objectContain, t.w10]}
`;

export default Gamecard;

import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Image, Pressable, Text} from 'native-base';

// image
const SuceessImg = require('../../assets/successBg.png');
const Coin = require('../../assets/coin.png');

// component
import ButtonComponent from '../../components/button';

// dummy

const Success = ({navigation}) => {
  return (
    <SView>
      <SuccessBg source={SuceessImg} alt="bg">
        <SuccessCard>
          <SuccessCardTopTextHolder>
            <SuccessCardTopText>
              Congratulations, practice completed
            </SuccessCardTopText>
          </SuccessCardTopTextHolder>
          <SuccessCardScore>Score 7/10</SuccessCardScore>
          <SuccessCardPointHolder>
            <SuccessCardPointHolderText>
              You have earn 500
            </SuccessCardPointHolderText>
            <SuccessCardPointHolderImage source={Coin} alt="coin" />
          </SuccessCardPointHolder>
          <SuccessCardButton
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              });
            }}>
            <SuccessCardButtonText>Go Home</SuccessCardButtonText>
          </SuccessCardButton>
        </SuccessCard>
      </SuccessBg>
    </SView>
  );
};

const SView = styled(Box)`
  ${[t.bgWhite, t.hFull, t.relative]}
`;

const SuccessBg = styled(ImageBackground)`
  ${[t.hFull, t.wFull, t.objectContain, t.flex, t.itemsCenter, t.justifyCenter]}
`;

const SuccessCard = styled(Box)`
  ${[t.w64, t.bgGray600, t.roundedSm, t.pX4, t.pY8, t.flex, t.itemsCenter]}
`;

const SuccessCardTopText = styled(Text)`
  ${[t.textWhite, t.textSm, t.textCenter, t.wFull]}
`;

const SuccessCardTopTextHolder = styled(Text)`
  ${[t.mB2]}
`;

const SuccessCardScore = styled(Text)`
  ${[t.text4xl, t.textWhite]}
`;
const SuccessCardPointHolder = styled(Box)`
  ${[t.mT4, t.flex, t.flexRow, t.itemsCenter, t.mB4]}
`;
const SuccessCardPointHolderText = styled(Text)`
  ${[t.textWhite]}
`;
const SuccessCardPointHolderImage = styled(Image)`
  ${[t.h8, t.objectContain, t.w10]}
`;

const SuccessCardButton = styled(Pressable)`
  ${[t.bgGreen500, t.wFull, t.flex, t.itemsCenter, t.pY2, t.roundedSm]}
`;

const SuccessCardButtonText = styled(Text)`
  ${[t.textWhite, t.textSm]}
`;

export default Success;

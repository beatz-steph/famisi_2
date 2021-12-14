import React, {useContext} from 'react';
import {ImageBackground} from 'react-native';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Image, Pressable, Text} from 'native-base';
import QuizContext from './quizContext';

// image
const SuceessImg = require('../../assets/successBg.png');
const Coin = require('../../assets/coin.png');

// component
import {calculateResult} from '../../functions';

const Success = ({navigation}) => {
  const {quiz, answers} = useContext(QuizContext);
  return (
    <SView>
      <SuccessBg source={SuceessImg} alt="bg">
        <SuccessCard>
          <SuccessCardTopTextHolder>
            <SuccessCardTopText>
              Congratulations, practice completed
            </SuccessCardTopText>
          </SuccessCardTopTextHolder>
          <SuccessCardScore>
            Score {Math.floor((calculateResult(quiz, answers) / 6) * 100)} %
          </SuccessCardScore>

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
  ${[t.w64, t.bgGray700, t.roundedSm, t.pX4, t.pY8, t.flex, t.itemsCenter]}
`;

const SuccessCardTopText = styled(Text)`
  ${[t.textWhite, t.textSm, t.textCenter, t.wFull]}
`;

const SuccessCardTopTextHolder = styled(Text)`
  ${[t.mB2]}
`;

const SuccessCardScore = styled(Text)`
  ${[t.text4xl, t.textWhite, t.mB4]}
`;

const SuccessCardButton = styled(Pressable)`
  ${[t.bgGreen500, t.wFull, t.flex, t.itemsCenter, t.pY2, t.roundedSm]}
`;

const SuccessCardButtonText = styled(Text)`
  ${[t.textWhite, t.textSm]}
`;

export default Success;

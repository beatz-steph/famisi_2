import React, {useContext, useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Image, Pressable, Text} from 'native-base';
import QuizContext from '../../context/quizContext';

// image
const SuceessImg = require('../../assets/successBg.png');
const Coin = require('../../assets/coin.png');

// component
import {calculateResult} from '../../functions';
import AppContext from '../../context/appContext';

const Waiting = ({navigation}) => {
  const {
    quiz,
    answers,
    setQuiz,
    setAnswers,
    setPlay,
    setSelectedFriend,
    selectedFriend,
    selectedGame,
    opponent,
    setOpponent,
  } = useContext(QuizContext);

  const {auth} = useContext(AppContext);

  return (
    <SView>
      <SuccessBg>
        <MainCard>
          <MainCardText>Waiting for {opponent} ...</MainCardText>

          <MainCardButton
            onPress={() => {
              setPlay('local');
              setQuiz([]);
              setAnswers([]);
              setSelectedFriend(null);
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              });
            }}>
            <MainCardButtonText>Go Home</MainCardButtonText>
          </MainCardButton>
        </MainCard>
      </SuccessBg>
    </SView>
  );
};

const SView = styled(Box)`
  ${[t.bgWhite, t.hFull, t.relative]}
`;

const SuccessBg = styled(Box)`
  ${[t.hFull, t.wFull, t.objectContain, t.flex, t.itemsCenter, t.justifyCenter]}
`;

const MainCard = styled(Box)`
  ${[t.w64, t.bgGray700, t.roundedSm, t.pX4, t.pY8, t.flex, t.itemsCenter]}
`;

const MainCardText = styled(Text)`
  ${[t.textxl, t.textWhite, t.mB4]}
`;

const MainCardButton = styled(Pressable)`
  ${[t.bgGreen500, t.wFull, t.flex, t.itemsCenter, t.pY2, t.roundedSm]}
`;

const MainCardButtonText = styled(Text)`
  ${[t.textWhite, t.textSm]}
`;

export default Waiting;

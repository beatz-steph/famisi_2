import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Text} from 'native-base';

const QuizBoard = ({word, meaning}) => {
  return (
    <QuizBoardBody>
      <QuizMain>
        <QuizMainText>{word}</QuizMainText>
      </QuizMain>
      <QuizSub>
        <QuizSubText>Meaning: {meaning}</QuizSubText>
      </QuizSub>
    </QuizBoardBody>
  );
};

const QuizBoardBody = styled(Box)`
  ${[t.wFull, t.h40, t.bgGray600, t.roundedSm, t.relative, t.p8]}
`;

const QuizMain = styled(Box)`
  ${[t.wFull, t.flex, t.itemsCenter, t.justifyCenter]}
`;

const QuizMainText = styled(Text)`
  ${[t.textWhite, t.text5xl]}
`;

const QuizSub = styled(Box)`
  ${[
    t.absolute,
    {bottom: 16, left: 16},
    t.pX6,
    t.pY2,
    t.bgGray400,
    t.roundedFull,
  ]}
`;

const QuizSubText = styled(Text)`
  ${[t.textWhite, t.textSm]}
`;

export default QuizBoard;

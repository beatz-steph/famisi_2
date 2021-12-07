import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Text, Pressable} from 'native-base';

const QuizOption = ({name, value, onSelect, active}) => {
  return (
    <QuizOptionBody
      active={active}
      value={value}
      onPress={() => {
        onSelect(value);
      }}>
      <QuizOptionText>{name}</QuizOptionText>
    </QuizOptionBody>
  );
};

const QuizOptionBody = styled(Pressable)`
  ${[
    t.wFull,
    {background: '#EEF3F7'},
    t.pX8,
    t.pY4,
    t.roundedSm,
    t.borderGreen500,
    {borderWidth: prop => (prop.active === prop.value ? 2 : 0)},
    t.mB4,
  ]}
`;

const QuizOptionText = styled(Text)`
  ${[]}
`;

export default QuizOption;

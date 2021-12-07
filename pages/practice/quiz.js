import React, {useState} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Image, Pressable, ScrollView} from 'native-base';

// image
const Close = require('../../assets/close.png');

// component
import QuizBoard from '../../components/quizBoard';
import QuizOption from '../../components/quizOption';
import ButtonComponent from '../../components/button';

// dummy
const options = [
  {name: 'Ibere', value: '1'},
  {name: 'Ibere', value: '2'},
  {name: 'Ibere', value: '3'},
  {name: 'Ibere', value: '4'},
];

const Quiz = ({navigation}) => {
  const [selected, setSelected] = useState('');
  return (
    <SView>
      <Top>
        <CloseButton onPress={() => navigation.navigate('SetUp')}>
          <CloseIcon source={Close} alt="close" />
        </CloseButton>
      </Top>

      {/* quiz */}
      <QuizBoardHolder>
        <QuizBoard />
      </QuizBoardHolder>
      <QuizOptionHolder>
        {options.map((item, index) => {
          return (
            <QuizOption
              key={`quizOption__${index}`}
              name={item.name}
              active={selected}
              onSelect={setSelected}
              value={item.value}
            />
          );
        })}
      </QuizOptionHolder>
      <ButtonComponentHolder>
        {selected ? (
          <ButtonComponent
            text="next"
            onPress={() => navigation.navigate('Success')}
          />
        ) : null}
      </ButtonComponentHolder>
    </SView>
  );
};

const SView = styled(ScrollView)`
  ${[t.mB4, t.bgWhite, t.p4, t.hFull, t.relative, t.overflowVisible]}
`;
const Top = styled(Box)`
  ${[t.wFull, t.flex, t.flexRow, t.pX4, t.pY2]}
`;

const CloseButton = styled(Pressable)`
  ${[
    t.w10,
    t.h10,
    t.roundedFull,
    t.bgGreen500,
    t.flex,
    t.itemsCenter,
    t.justifyCenter,
  ]}
`;

const CloseIcon = styled(Image)`
  ${[t.objectContain, t.h6]}
`;

const QuizBoardHolder = styled(Box)`
  ${t.mT8}
`;

const QuizOptionHolder = styled(Box)`
  ${[t.mT16, t.pX4]}
`;

const ButtonComponentHolder = styled(Box)`
  ${[t.flex, t.mT8]}
`;

export default Quiz;

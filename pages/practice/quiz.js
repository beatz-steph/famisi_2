import React, {useState, useContext, useEffect} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Image, Pressable, ScrollView} from 'native-base';
import QuizContext from './quizContext';

// image
const Close = require('../../assets/close.png');

// component
import QuizBoard from '../../components/quizBoard';
import QuizOption from '../../components/quizOption';
import ButtonComponent from '../../components/button';

const Quiz = ({navigation}) => {
  const {quiz, answers, setAnswers} = useContext(QuizContext);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});
  const [selected, setSelected] = useState('');

  const __handleNext = () => {
    if (answers.length === 5) {
      setAnswers(prevanswers => [...prevanswers, selected]);
      navigation.navigate('Success');
      console.log({answers, quiz});
    } else {
      setAnswers(prevanswers => [...prevanswers, selected]);
      setSelected('');
      setCurrent(prevcurrent => prevcurrent + 1);

      console.log({answers, quiz});
    }
  };

  useEffect(() => {
    setData(quiz[current]);
  }, [current, quiz]);
  return (
    <SView>
      <Top>
        <CloseButton onPress={() => navigation.navigate('SetUp')}>
          <CloseIcon source={Close} alt="close" />
        </CloseButton>
      </Top>

      {/* quiz */}
      <QuizBoardHolder>
        <QuizBoard word={data.word} meaning={data.meaning} />
      </QuizBoardHolder>
      <QuizOptionHolder>
        {data &&
          data.options &&
          data.options.map((item, index) => {
            return (
              <QuizOption
                key={`quizOption__${index}`}
                name={item}
                active={selected}
                onSelect={setSelected}
                value={item}
              />
            );
          })}
      </QuizOptionHolder>
      <ButtonComponentHolder>
        {selected ? (
          <ButtonComponent text="next" onPress={__handleNext} />
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

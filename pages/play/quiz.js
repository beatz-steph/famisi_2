import React, {useState, useContext, useEffect} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {
  Box,
  Image,
  Pressable,
  ScrollView,
  Spinner,
  useToast,
} from 'native-base';
import QuizContext from '../../context/quizContext';

// image
const Close = require('../../assets/close.png');

// component
import QuizBoard from '../../components/quizBoard';
import QuizOption from '../../components/quizOption';
import ButtonComponent from '../../components/button';

import {play_type} from '../../constatnts';
import {calculateResult} from '../../functions';
import AppContext from '../../context/appContext';

import {updateGame} from '../../services';

const Quiz = ({navigation}) => {
  const {
    quiz,
    setQuiz,
    setSelectedGame,
    setPlay,
    answers,
    setAnswers,
    play,
    selectedGame,
  } = useContext(QuizContext);
  const {auth} = useContext(AppContext);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async info => {
    setLoading(true);
    const onSuccess = data => {
      setLoading(false);
      setQuiz([]);
      setPlay('');
      setSelectedGame(null);

      navigation.navigate('Waiting');
    };

    const onFailure = (err, message) => {
      setLoading(false);
      console.log(err, message);
      navigation.navigate('Games');
      toast.show({
        status: 'error',
        description:
          'Something went wrong updating your play, please try again',
      });
    };

    await updateGame(info, onSuccess, onFailure);
  };

  const __handleNext = async () => {
    if (answers.length > 4 && play === play_type.online) {
      const score = calculateResult(quiz, answers);

      const player =
        selectedGame.player1._id === auth._id ? 'player1' : 'player2';

      const info = {id: selectedGame._id, player, score};

      console.log({
        authId: auth._id,
        p1: selectedGame.player1._id,
        p2: selectedGame.player2._id,
        info,
        selectedGame,
      });
      await handleSubmit(info);
    }

    if (answers.length > 4 && play !== play_type.online) {
      setAnswers(prevanswers => [...prevanswers, selected]);
      navigation.navigate('Success');
    } else {
      setAnswers(prevanswers => [...prevanswers, selected]);
      setSelected('');
      setCurrent(prevcurrent => prevcurrent + 1);
    }
  };

  useEffect(() => {
    setData(quiz[current]);
  }, [current, quiz]);
  return (
    <SView>
      <Top>
        <CloseButton
          onPress={() => {
            play_type.online
              ? navigation.navigate('Games')
              : navigation.navigate('SetUp');
          }}>
          <CloseIcon source={Close} alt="close" />
        </CloseButton>
      </Top>
      {loading ? (
        <SpinnerHolder>
          <Spinner color="#49D395" />
        </SpinnerHolder>
      ) : (
        <>
          {/* quiz */}
          <QuizBoardHolder>
            <QuizBoard word={data?.word} meaning={data?.meaning} />
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
        </>
      )}
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

const SpinnerHolder = styled(Box)`
  ${[t.wFull, t.flex, t.itemsCenter, t.justifyCenter, t.hFull]}
`;

export default Quiz;

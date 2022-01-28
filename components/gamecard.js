import React, {useContext, useState, useEffect} from 'react';
import {NavigationContext} from '@react-navigation/native';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Text, Pressable, Image} from 'native-base';

const PonitImage = require('../assets/coin.png');

import QuizContext from '../context/quizContext';

import {play_type} from '../constatnts';
import AppContext from '../context/appContext';

const Gamecard = ({data}) => {
  const {setQuiz, setPlay, setSelectedGame, setOpponent} =
    useContext(QuizContext);
  const {auth, setGameLoad} = useContext(AppContext);
  const navigation = useContext(NavigationContext);

  const [canPlay, setCanPlay] = useState(false);

  const player = auth._id === data.player1._id ? 'player1' : 'player2';

  const __onPress = () => {
    if (!canPlay) {
      return;
    }

    const {player1, player2} = data;

    const info = player1._id === auth._id ? player1.username : player2.username;

    setQuiz(data?.quiz);
    setPlay(play_type.online);
    setSelectedGame(data);
    setOpponent(info);
    setGameLoad(false);
    navigation.navigate('Play', {screen: 'Quiz'});
  };

  useEffect(() => {
    if (data.progress[player] === 'null') {
      setCanPlay(true);
    }
  }, [data.progress, player]);

  return (
    <Wrapper onPress={__onPress}>
      <ImageHolder>
        <ImageItem
          alt="avatar"
          source={{
            uri:
              `https://avatars.dicebear.com/v2/avataaars/${data?.player1?._id}.png` ||
              '',
          }}
        />
        <ImageText>VS</ImageText>
        <ImageItem
          alt="avatar"
          source={{
            uri:
              `https://avatars.dicebear.com/v2/avataaars/${data?.player2?._id}.png` ||
              '',
          }}
        />
      </ImageHolder>
      <OtherHolder>
        {canPlay && !data.done ? <Status> ongoing</Status> : null}

        {!canPlay && !data.done ? <Status> waiting</Status> : null}

        {!canPlay && data.done ? (
          <>
            {data.winner === player ? (
              <>
                <Status> +500</Status>
                <PointsIcon source={PonitImage} alt="coin" />
              </>
            ) : (
              <>
                <Status> -200</Status>
                <PointsIcon source={PonitImage} alt="coin" />
              </>
            )}
          </>
        ) : null}
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
  ${[t.w10, t.h10, t.roundedFull]}
`;
const ImageText = styled(Text)`
  ${[t.fontBold, t.mX2, t.text2xl, t.italic]}
`;
const Status = styled(Text)`
  ${[t.italic, t.mR2]}
`;

const PointsIcon = styled(Image)`
  ${[t.h8, t.objectContain, t.w10]}
`;

export default Gamecard;

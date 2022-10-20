import React, {useState, useContext, useEffect, useCallback} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {
  Text,
  Box,
  Image,
  ChevronLeftIcon,
  Pressable,
  Select,
  CheckIcon,
  Modal,
  Spinner,
  useToast,
} from 'native-base';
import QuizContext from '../../context/quizContext';
import AppContext from '../../context/appContext';

// image
const Arrow = require('../../assets/arrow.png');

// component
import FriendList from '../../components/friendList';
import FriendModal from '../../components/friendModal';

import {difficulty_list} from '../../constatnts';

import {generateQuiz} from '../../functions';

import {play_type} from '../../constatnts';

import {fetchFriends, startGame} from '../../services';

const Setup = ({navigation}) => {
  const toast = useToast();
  const {
    play,
    setQuiz,
    selectedFriend,
    setSelectedFriend,
    friendsList,
    setFriendsList,
    setPlay,
    setSelectedGame,
    setOpponent,
    onlineDb,
  } = useContext(QuizContext);

  const {auth} = useContext(AppContext);

  const [difficulty, setDifficulty] = useState('');
  const [addFriend, setAddFriend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startOnline, setStartOnline] = useState(false);

  const onStart = async () => {
    console.log('start');
    const quiz = generateQuiz(difficulty, onlineDb);

    if (play === play_type.local) {
      setDifficulty('');
      setQuiz(quiz);
      navigation.navigate('Quiz');
    } else {
      setStartOnline(true);
      const info = {
        player1: auth._id,
        player2: selectedFriend._id,
        quiz,
        progress: {
          player1: 'null',
          player2: 'null',
        },
      };
      const onSuccess = data => {
        const infoNew = data.newGame;
        setStartOnline(false);
        console.log(data);
        //newGame

        // setQuiz(infoNew?.quiz);
        // setPlay(play_type.online);
        // setSelectedGame(infoNew.newGame);
        // setOpponent(selectedFriend.username);
        navigation.navigate('Games');
      };

      const onFailure = (err, message) => {
        setStartOnline(false);
        console.log({err, message});
        toast.show({status: 'error', description: message});
      };

      await startGame(info, onSuccess, onFailure);
      setDifficulty('');
      setSelectedFriend(null);
    }
  };

  const __fetchFriends = useCallback(async () => {
    setLoading(true);

    const onSuccess = async data => {
      setLoading(false);
      setFriendsList(data);
    };

    const onFailure = (err, message) => {
      setLoading(false);
      // toast.show({
      //   status: 'error',
      //   description: message,
      // });
    };

    await fetchFriends(auth, onSuccess, onFailure);
  }, [auth, setFriendsList]);

  useEffect(() => {
    __fetchFriends();
  }, [__fetchFriends]);

  return (
    <SView>
      <Pressable
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          })
        }>
        <BackButton>
          <Box>
            <ChevronLeftIcon size="6" />
          </Box>
          <Box>
            <BackText>Back</BackText>
          </Box>
        </BackButton>
      </Pressable>

      {play === play_type.online ? (
        <Online>
          {loading ? (
            <Spinner color="#49D395" />
          ) : (
            <>
              <AddButton onPress={() => setAddFriend(true)}>
                <AddButtonText>Add friend </AddButtonText>
              </AddButton>
              <FriendList
                select={selectedFriend}
                onSelect={setSelectedFriend}
                list={friendsList}
              />

              <Modal
                isOpen={addFriend}
                onClose={() => setAddFriend(false)}
                size="lg">
                <FriendModal
                  auth={auth}
                  loading={loading}
                  setLoading={setLoading}
                  __fetchFriends={__fetchFriends}
                  onClose={() => setAddFriend(false)}
                />
              </Modal>
            </>
          )}
        </Online>
      ) : null}

      <CategorySelect>
        <Select
          selectedValue={difficulty}
          minWidth="200"
          accessibilityLabel="Select difficulty"
          placeholder="Select difficulty"
          _selectedItem={{
            bg: '#49D395',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setDifficulty(itemValue)}>
          {difficulty_list.map((item, index) => {
            return (
              <Select.Item
                key={`difficulty_${index}`}
                label={item.name}
                value={item.value}
              />
            );
          })}
        </Select>
      </CategorySelect>
      <StartHolder>
        {difficulty ? (
          <StartButton onPress={onStart}>
            {startOnline ? (
              <Spinner color="#49D395" />
            ) : (
              <StartIcon source={Arrow} alt="start" />
            )}
          </StartButton>
        ) : null}
      </StartHolder>
    </SView>
  );
};

const SView = styled(Box)`
  ${[t.mB4, t.bgWhite, t.p2, t.hFull]}
`;

const BackButton = styled(Box)`
  ${[t.flex, t.itemsCenter, t.flexRow, t.mB8, t.mT4]}
`;

const BackText = styled(Text)`
  ${[t.fontBold, t.textBlack]}
`;

const CategorySelect = styled(Box)`
  ${[t.mT8]}
`;

const StartHolder = styled(Box)`
  ${[t.flex, t.wFull, t.itemsCenter, t.mT24]}
`;

const StartButton = styled(Pressable)`
  ${[
    t.w20,
    t.h20,
    t.roundedFull,
    t.bgGreen500,
    t.flex,
    t.itemsCenter,
    t.justifyCenter,
  ]}
`;

const StartIcon = styled(Image)`
  ${[t.h12, t.objectContain, t.mXAuto]}
`;

const AddButton = styled(Pressable)`
  ${[
    t.bgGray700,
    t.flex,
    t.w32,
    t.itemsCenter,
    t.justifyCenter,
    t.pY2,
    t.rounded,
    t.mLAuto,
    t.mB8,
  ]}
`;

const AddButtonText = styled(Text)`
  ${[t.textWhite]}
`;

const Online = styled(Box)`
  ${t.mB10}
`;

export default Setup;

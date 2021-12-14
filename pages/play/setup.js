import React, {useState, useContext} from 'react';
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
} from 'native-base';
import QuizContext from './quizContext';

// image
const Arrow = require('../../assets/arrow.png');

// component
import FriendList from '../../components/friendList';
import FriendModal from '../../components/friendModal';

import {difficulty_list} from '../../constatnts';

import {generateQuiz} from '../../functions';

import {play_type} from '../../constatnts';

const Setup = ({navigation}) => {
  const {play, setQuiz, selectedFriend, setSelectedFriend, friendsList} =
    useContext(QuizContext);

  const [difficulty, setDifficulty] = useState('');
  const [addFriend, setAddFriend] = useState(false);

  const onStart = () => {
    console.log('start');
    const quiz = generateQuiz(difficulty);

    setQuiz(quiz);

    navigation.navigate('Quiz');
  };

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
            <FriendModal />
          </Modal>
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
            <StartIcon source={Arrow} alt="start" />
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

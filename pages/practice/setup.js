import React, {useState} from 'react';
// import {useRoute} from '@react-navigation/native';
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
} from 'native-base';

// image
const Arrow = require('../../assets/arrow.png');

// component
import ButtonComponent from '../../components/button';

// dummy
const categoryList = [
  {name: 'Numbers', value: 'numbers'},
  {name: 'Nouns', value: 'nouns'},
  {name: 'Pronouns', value: 'pronouns'},
  {name: 'Verbs', value: 'verbs'},
  {name: 'Adverbs', value: 'adverbs'},
  {name: 'Adjective', value: 'adjective'},
];
const difficultyList = [
  {name: 'Easy', value: 'easy'},
  {name: 'Medium', value: 'medium'},
  {name: 'Difficult', value: 'difficult'},
];

const Setup = ({navigation}) => {
  //   const route = useRoute();

  //   state
  const [category, setCategory] = useState('');

  const [difficulty, setDifficulty] = useState('');

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

      <ButtonComponent text="Randomize" />
      <CategorySelect>
        <Select
          selectedValue={category}
          minWidth="200"
          accessibilityLabel="Select category"
          placeholder="Select category"
          _selectedItem={{
            bg: '#49D395',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setCategory(itemValue)}>
          {categoryList.map((item, index) => {
            return (
              <Select.Item
                key={`category_${index}`}
                label={item.name}
                value={item.value}
              />
            );
          })}
        </Select>
      </CategorySelect>

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
          {difficultyList.map((item, index) => {
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
        {category && difficulty ? (
          <StartButton onPress={() => navigation.navigate('Quiz')}>
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

export default Setup;

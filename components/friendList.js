import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {
  Text,
  Box,
  Image,
  //   ChevronLeftIcon,
  Pressable,
  //   Select,
  //   CheckIcon,
  ScrollView,
} from 'native-base';

const FriendList = ({list = [], select, onSelect}) => {
  return (
    <ScrollView horizontal={true}>
      <MainHolder>
        {list.map((item, index) => {
          return (
            <Item
              imageUrl={item.imageUrl}
              name={item.name}
              select={select}
              onSelect={onSelect}
              {...item}
            />
          );
        })}
      </MainHolder>
    </ScrollView>
  );
};

const Item = ({imageUrl, name, select, onSelect, id}) => (
  <ImageWrapper
    active={select === id}
    onPress={() => {
      onSelect(id);
    }}>
    <ImageMain
      source={{
        uri: imageUrl || '',
      }}
      alt="profile_image"
    />
    <Name>{name}</Name>
  </ImageWrapper>
);

const MainHolder = styled(Box)`
  ${[t.flex, t.flexRow, t.wFull, t.justifyBetween, t.overflowVisible]}
`;

const ImageWrapper = styled(Pressable)`
  ${[
    t.mX2,
    t.p1,
    t.flex,
    t.itemsCenter,
    t.borderGreen500,
    {borderWidth: prop => (prop.active ? 1 : 0)},
    t.roundedSm,
  ]}
`;

const ImageMain = styled(Image)`
  ${[t.w20, t.h20, t.objectContain, t.mB2, t.roundedSm]}
`;

const Name = styled(Text)`
  ${[t.textSm, t.fontSemibold]}
`;

export default FriendList;

import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Box, Pressable} from 'native-base';

const Bg = require('../assets/bg.png');

const Zone = ({navigation}) => {
  return (
    <Holder>
      <BgImage source={Bg} alt="bg">
        <TopZonePress>
          <TopZone>
            <TopZoneText>Play with friends</TopZoneText>
          </TopZone>
        </TopZonePress>
        <BottomZonePress
          onPress={() => {
            navigation.navigate('Practice');
          }}>
          <BottomZone>
            <BottomZoneText>Practice zone</BottomZoneText>
          </BottomZone>
        </BottomZonePress>
      </BgImage>
    </Holder>
  );
};

const Holder = styled(Box)`
  ${[t.mT10, t.mB20, {height: '450'}]};
`;

const TopZonePress = styled(Pressable)`
  ${[{height: '50%'}]}
`;

const BottomZonePress = styled(Pressable)`
  ${[{height: '50%'}]}
`;

const TopZone = styled(Box)`
  ${[
    {height: '100%'},
    t.flex,
    t.itemsCenter,
    t.justifyCenter,
    t.roundedSm,
    t.relative,
  ]}
`;

const BgImage = styled(ImageBackground)`
  ${[t.hFull, t.objectContain, t.wFull]}
`;

const TopZoneText = styled(Text)`
  ${[t.textWhite, t.text3xl, t.fontBold]}
`;

const BottomZone = styled(Box)`
  ${[{height: '100%'}, t.flex, t.itemsCenter, t.justifyCenter, t.roundedSm]}
`;

const BottomZoneText = styled(Text)`
  ${[t.text3xl, t.fontBold, {color: '#364956'}]}
`;

export default Zone;

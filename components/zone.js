import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Box} from 'native-base';

const Zone = () => {
  return (
    <Holder>
      <TopZone>
        <TopZoneText>Play with friends</TopZoneText>
      </TopZone>
      <BottomZone>
        <BottomZoneText>Practice zone</BottomZoneText>
      </BottomZone>
    </Holder>
  );
};

const Holder = styled(Box)`
  ${[t.mT16]}
`;

const TopZone = styled(Box)`
  ${[
    {backgroundColor: '#364956'},
    t.h56,
    t.flex,
    t.itemsCenter,
    t.justifyCenter,
    t.roundedSm,
    t.mB6,
  ]}
`;

const TopZoneText = styled(Text)`
  ${[t.textWhite, t.text3xl, t.fontBold]}
`;

const BottomZone = styled(Box)`
  ${[
    {backgroundColor: '#EEF3F7'},
    t.h56,
    t.flex,
    t.itemsCenter,
    t.justifyCenter,
    t.roundedSm,
  ]}
`;

const BottomZoneText = styled(Text)`
  ${[t.text3xl, t.fontBold, {color: '#364956'}]}
`;

export default Zone;

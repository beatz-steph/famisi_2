import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Box, Input} from 'native-base';

// component
import Header from '../components/header';
import Zone from '../components/zone';

const Home = () => {
  return (
    <SView>
      {/* Header */}
      <Header />

      {/* zones */}
      <Zone />

      {/* Navigation */}
    </SView>
  );
};

const SView = styled(Box)`
  ${[t.mB4, t.bgWhite, t.p2, t.hFull]}
`;

export default Home;

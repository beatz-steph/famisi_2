import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Center, Text, Image, Box} from 'native-base';

const Logo = require('../assets/logo.png');

// component
import Button from '../components/button';

const Intro = ({setAuth}) => {
  const onContinue = () => {
    console.log('hello');
    setAuth(true);
  };
  return (
    <SView>
      <LogoImage>
        <Center>
          <Image source={Logo} alt="logo" />
        </Center>
      </LogoImage>

      <IntroText>
        A new and interactive way of learning yoruba language with friends
      </IntroText>

      <ButtonHolder>
        <Button text="Continue" onPress={onContinue} />
      </ButtonHolder>
    </SView>
  );
};

const SView = styled(Box)`
  ${[t.mB4, t.bgWhite, t.rounded, t.p8, t.hFull]}
`;

const IntroText = styled(Text)`
  ${[t.textXl, t.textGray900, t.fontLight, t.textCenter]}
`;

const LogoImage = styled(Box)`
  ${[t.mT56, t.mB16]}
`;

const ButtonHolder = styled(Box)`
  ${[t.mT16]}
`;

export default Intro;

import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {
  Text,
  Image,
  Box,
  Center,
  ScrollView,
  ChevronLeftIcon,
} from 'native-base';

const Logo = require('../assets/logo.png');

// component
import Button from '../components/button';
import Input from '../components/input';

const SignUpScreen = ({navigation}) => {
  return (
    <SView>
      <BackButton onPress={() => navigation.goBack()}>
        <Box>
          <ChevronLeftIcon size="6" />
        </Box>
        <Box>
          <BackText>Back</BackText>
        </Box>
      </BackButton>
      <LogoImage>
        <Image source={Logo} alt="logo" />
      </LogoImage>
      <HeaderText>Create an account</HeaderText>
      <Holder>
        <InputWrapper>
          <Input label="Email" placeholder="Your email" type="text" />
        </InputWrapper>
        <InputWrapper>
          <Input label="Username" placeholder="Your username" type="text" />
        </InputWrapper>
        <InputWrapper>
          <Input label="Password" placeholder="******" type="password" />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Confirm password"
            placeholder="******"
            type="password"
          />
        </InputWrapper>
        <ButtonHolder>
          <Button text="Continue" />
        </ButtonHolder>
        <SignUp>
          <DontHaveAccount onPress={() => navigation.goBack()}>
            Already have an account? <GreenText>Sign in</GreenText>
          </DontHaveAccount>
        </SignUp>
      </Holder>
    </SView>
  );
};

const SView = styled(Box)`
  ${[t.mB4, t.bgWhite, t.p8, t.hFull]}
`;

const BackButton = styled(Box)`
  ${[t.flex, t.itemsCenter, t.flexRow, t.mB8]}
`;

const BackText = styled(Text)`
  ${[t.fontBold, t.textBlack]}
`;

const Holder = styled(ScrollView)`
  ${[t.h9_12]}
`;

const LogoImage = styled(Box)`
  ${[t.mB8]}
`;

const HeaderText = styled(Text)`
  ${[t.textXl, t.textGray900, t.fontBold, t.mB12]}
`;

const InputWrapper = styled(Box)`
  ${[t.mB8]}
`;

const ButtonHolder = styled(Box)`
  ${[t.mT10]}
`;

const SignUp = styled(Center)`
  ${[t.mT16, t.mB8]}
`;

const DontHaveAccount = styled(Text)`
  ${[t.fontMedium]}
`;

const GreenText = styled(Text)`
  ${[t.textGreen500]}
`;

export default SignUpScreen;

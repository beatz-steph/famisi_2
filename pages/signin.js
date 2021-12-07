import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Image, Box, Center} from 'native-base';

const Logo = require('../assets/logo.png');

// component
import Button from '../components/button';
import Input from '../components/input';

const SignIn = ({navigation, setInitial}) => {
  const onContinue = () => {
    setInitial('home');
  };

  return (
    <SView>
      <LogoImage>
        <Image source={Logo} alt="logo" />
      </LogoImage>

      <HeaderText>Welcome to Famisi</HeaderText>

      <InputWrapper>
        <Input label="Username" placeholder="Your username" type="text" />
      </InputWrapper>
      <InputWrapper>
        <Input label="Password" placeholder="******" type="password" />
      </InputWrapper>

      <Forgot>
        <ForgotText>Forgot password?</ForgotText>
      </Forgot>
      <ButtonHolder>
        <Button text="Sign in" onPress={onContinue} />
      </ButtonHolder>
      <SignUp>
        <DontHaveAccount onPress={() => navigation.push('SignUp')}>
          Don’t have an account? <GreenText>Create</GreenText>
        </DontHaveAccount>
      </SignUp>
    </SView>
  );
};

const SView = styled(Box)`
  ${[t.mB4, t.bgWhite, t.p8, t.hFull]}
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
  ${[t.mT20]}
`;

const Forgot = styled(Box)`
  ${[t.mLAuto]}
`;

const ForgotText = styled(Text)`
  ${[t.textGreen500, t.textSm, t.fontLight]}
`;

const SignUp = styled(Center)`
  ${[t.mT16]}
`;

const DontHaveAccount = styled(Text)`
  ${[t.fontMedium]}
`;

const GreenText = styled(Text)`
  ${[t.textGreen500]}
`;

export default SignIn;

import React, {useState, useContext} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {
  Text,
  Image,
  Box,
  Center,
  ScrollView,
  ChevronLeftIcon,
  Pressable,
  useToast,
  Spinner,
} from 'native-base';

const Logo = require('../assets/logo.png');

// component
import Button from '../components/button';
import Input from '../components/input';

import {signup} from '../services';
import {storeAppData} from '../functions';
import AppContext from '../context/appContext';

const SignUpScreen = ({navigation}) => {
  const {setAuth} = useContext(AppContext);
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [loading, setLoading] = useState(false);

  const __signup = async e => {
    if (password.length < 5) {
      toast.show({
        status: 'error',
        description: 'Password length must be greater than 4 characters',
      });
      return;
    }

    if (password !== confirmpassword) {
      toast.show({
        status: 'error',
        description: 'Passwords do not match',
      });

      return;
    }

    setLoading(true);

    const onSuccess = async data => {
      setLoading(false);
      await storeAppData(data.data.user);
      console.log({data: data.data.user});
      setAuth(data.data.user);

      toast.show({
        status: 'success',
        description: `Welcome to famisi trivia ${data?.user?.username || ''}`,
      });
    };

    const onFailure = (err, message) => {
      console.log({err});
      setLoading(false);
      toast.show({
        status: 'error',
        description: message,
      });
    };

    await signup({username, password, email}, onSuccess, onFailure);
  };
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
          <Input
            label="Email"
            placeholder="Your email"
            type="text"
            onChange={e => {
              setEmail(e);
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Username"
            placeholder="Your username"
            type="text"
            onChange={e => {
              setUsername(e);
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Password"
            placeholder="******"
            type="password"
            onChange={e => {
              setPassword(e);
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Confirm password"
            placeholder="******"
            type="password"
            onChange={e => {
              setConfirmpassword(e);
            }}
          />
        </InputWrapper>
        <ButtonHolder>
          {loading ? (
            <Spinner color="#49D395" />
          ) : (
            <Button onPress={__signup} text="Continue" />
          )}
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

const BackButton = styled(Pressable)`
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

const ButtonHolder = styled(Pressable)`
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

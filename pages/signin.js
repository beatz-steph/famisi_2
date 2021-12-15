import React, {useState, useContext} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Image, Box, Center, useToast, Spinner} from 'native-base';

const Logo = require('../assets/logo.png');

// component
import Button from '../components/button';
import Input from '../components/input';

import {login} from '../services';
import {storeAppData} from '../functions';
import AppContext from '../context/appContext';

const SignIn = ({navigation, setInitial}) => {
  const {setAuth} = useContext(AppContext);
  const toast = useToast();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const __login = async () => {
    setLoading(true);

    const onSuccess = async data => {
      setLoading(false);
      await storeAppData(data.user);
      console.log({data});
      setAuth(data);
    };

    const onFailure = (err, message) => {
      setLoading(false);
      toast.show({
        status: 'error',
        description: message,
      });
    };

    console.log({name: username, password});

    await login({name: username, password}, onSuccess, onFailure);
  };

  return (
    <SView>
      <LogoImage>
        <Image source={Logo} alt="logo" />
      </LogoImage>

      <HeaderText>Welcome to Famisi</HeaderText>

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
          onChange={e => setPassword(e)}
        />
      </InputWrapper>

      <Forgot>
        <ForgotText>Forgot password?</ForgotText>
      </Forgot>
      <ButtonHolder>
        {loading ? (
          <Spinner color="#49D395" />
        ) : (
          <Button text="Sign in" onPress={__login} />
        )}
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

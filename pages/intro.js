import React, {useEffect, useContext} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Center, Text, Image, Box} from 'native-base';

const Logo = require('../assets/logo.png');

// component

import {getAppData, storeAppData} from '../functions';

import AppContext from '../context/appContext';

const Intro = () => {
  const {setAuth, setInitial} = useContext(AppContext);

  const Init = async () => {
    const appData = await getAppData();

    console.log(appData);

    if (!appData) {
      setInitial(false);
    } else {
      setInitial(false);
      setAuth(appData);
    }
  };

  useEffect(() => {
    setTimeout(Init, 5000);
  });
  return (
    <SView>
      <LogoImage>
        <Center>
          <Icon source={Logo} alt="logo" />
        </Center>
      </LogoImage>

      <IntroText>
        A new and interactive way of learning yoruba language with friends
      </IntroText>

      {/* <ButtonHolder>
        <Button text="Continue" onPress={onContinue} />
      </ButtonHolder> */}
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

const Icon = styled(Image)`
  ${[t.h10, t.objectContain, t.w30]}
`;

const ButtonHolder = styled(Box)`
  ${[t.mT24]}
`;

export default Intro;

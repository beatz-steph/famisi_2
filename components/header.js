import React, {useContext, useEffect, useCallback} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Box, Image} from 'native-base';
import AppContext from '../context/appContext';

// image
const Heart = require('../assets/heart.png');
const Coin = require('../assets/coin.png');
import {fetchInfo} from '../services';

const Header = () => {
  const {auth, setAuth} = useContext(AppContext);

  const __fetchInfo = useCallback(async () => {
    const onSuccess = data => {
      console.log({data});
      setAuth(data.user);
    };

    const onFailure = (err, message) => {
      console.log(err, message);
    };

    await fetchInfo(auth._id, onSuccess, onFailure);
  }, [auth._id, setAuth]);

  useEffect(() => {
    __fetchInfo();
  }, [__fetchInfo]);
  return (
    <HeaderWrapper>
      <ImageItem
        alt="avatar"
        source={{
          uri:
            `https://avatars.dicebear.com/v2/avataaars/${auth?._id}.png` || '',
        }}
      />

      <HeaderPoints>
        <HeaderPointsIcon source={Coin} alt="coin" />
        <HeaderPointsText>{auth?.points || 0}</HeaderPointsText>
      </HeaderPoints>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Box)`
  ${[
    t.h16,
    t.roundedSm,
    {backgroundColor: '#364956'},
    t.flex,
    t.flexRow,
    t.itemsCenter,
    t.pX8,
    t.justifyBetween,
  ]}
`;

const HeaderAvatar = styled(Box)`
  ${[t.w10, t.h10, t.roundedFull, t.bgGray300, {borderRadius: 50}]}
`;

const ImageItem = styled(Image)`
  ${[t.w10, t.h10, t.roundedFull]}
`;

const HeaderPoints = styled(Box)`
  ${[t.flex, t.flexRow, t.itemsCenter]}
`;

const HeaderPointsText = styled(Text)`
  ${[t.textWhite, t.fontSemibold]}
`;

const HeaderPointsIcon = styled(Image)`
  ${[t.h8, t.objectContain, t.w10]}
`;

export default Header;

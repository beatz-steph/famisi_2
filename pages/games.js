import React, {useState, useEffect, useContext, useCallback} from 'react';

import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Text, Spinner} from 'native-base';

// image

// component
import Header from '../components/header';
import MyTabBar from '../components/tabBar';

import Gamecard from '../components/gamecard';

import {fetcGames} from '../services';
import AppContext from '../context/appContext';

const Games = ({navigation, setShowBottomNavBar}) => {
  const {auth, setGameLoad, gameLoad} = useContext(AppContext);

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const getGames = useCallback(async () => {
    setLoading(true);
    const onSuccess = data => {
      setLoading(false);
      setGames(data);
      setGameLoad(true);
    };

    const onFailure = (err, message) => {
      setLoading(false);
      console.log({err, message});
    };
    await fetcGames(auth?._id, onSuccess, onFailure);
  }, [auth?._id, setGameLoad]);

  useEffect(() => {
    if (gameLoad) {
      return;
    }
    getGames();
  }, [getGames, gameLoad]);
  return (
    <SView>
      {/* Header */}
      <Header />

      <Title>Games </Title>
      {/* zones */}

      {loading ? (
        <Spinner color="#49D395" />
      ) : (
        <>
          {games &&
            games.map((item, index) => {
              return <Gamecard data={item} key={index} />;
            })}
        </>
      )}

      {/* Navigation */}
      <MyTabBar navigation={navigation} active="Games" />
    </SView>
  );
};

const SView = styled(Box)`
  ${[t.mB4, t.bgWhite, t.p2, t.hFull, t.relative]}
`;

const Title = styled(Text)`
  ${[t.text4xl, t.fontBold, t.mL4, t.mT2, t.mB8]}
`;

export default Games;

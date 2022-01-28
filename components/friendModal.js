import React, {useState} from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Text, useToast, Spinner} from 'native-base';

import Input from './input';
import Button from './button';

import {addFriend} from '../services';

const FriendModal = ({loading, setLoading, auth, __fetchFriends, onClose}) => {
  const [friend, setFriend] = useState('');
  const toast = useToast();

  const __addFriend = async () => {
    setLoading(true);

    const onSuccess = data => {
      setLoading(false);

      toast.show({
        status: 'success',
        description: 'Friend added successfully',
      });

      __fetchFriends();
      onClose();
    };
    const onFailure = (err, message) => {
      setLoading(false);
      console.log('on Failure');
      console.log({err, message});
    };
    await addFriend({id: auth._id, friend}, onSuccess, onFailure);
  };
  return (
    <ModalBody>
      <ModalText>Add friend</ModalText>
      <Input onChange={e => setFriend(e)} />
      <Separator />
      <ButtonHolder>
        {loading ? (
          <Spinner color="#49D395" />
        ) : (
          <Button text="Add" onPress={__addFriend} />
        )}
      </ButtonHolder>
    </ModalBody>
  );
};

const ModalBody = styled(Box)`
  ${[t.bgWhite, {width: '90%'}, t.roundedSm, t.pX4, t.pY4]}
`;
const ModalText = styled(Text)`
  ${[t.textSm, t.mB4]}
`;

const Separator = styled(Box)`
  ${[t.h8]}
`;

const ButtonHolder = styled(Box)`
  ${[t.mT2]}
`;

export default FriendModal;

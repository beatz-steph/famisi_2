import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Box, Text, useToast} from 'native-base';

import Input from './input';
import ButtonComponent from './button';

const FriendModal = ({loading, setLoading}) => {
  const toast = useToast();
  return (
    <ModalBody>
      <ModalText>Add friend</ModalText>
      <Input />
      <Separator />
      <ButtonComponent
        text="Add"
        onPress={() =>
          toast.show({
            title: 'Account verified',
            status: 'success',
            description: 'Thanks for signing up with us.',
          })
        }
      />
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

export default FriendModal;

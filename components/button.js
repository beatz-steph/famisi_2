import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Button} from 'native-base';

const ButtonComponent = ({text, onClick, Icon}) => {
  return (
    <ButtonBody>
      <ButtonText>{text}</ButtonText>
    </ButtonBody>
  );
};

const ButtonBody = styled(Button)`
  ${[t.bgGreen500, t.itemsCenter, t.flex]}
`;

const ButtonText = styled(Text)`
  ${[t.textWhite, t.textXl, t.itemsCenter, t.fontNormal]}
`;

export default ButtonComponent;

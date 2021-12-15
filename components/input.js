import React from 'react';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components/native';
import {Text, Box, Input} from 'native-base';

const InputComponent = ({label, placeholder, type, name, value, onChange}) => {
  return (
    <InputBody>
      {label && <InputLabel>{label}</InputLabel>}
      <InputTag
        name={name}
        value={value}
        onChangeText={onChange}
        type={type}
        placeholder={placeholder || ''}
      />
    </InputBody>
  );
};

const InputBody = styled(Box)`
  ${[]}
`;

const InputLabel = styled(Text)`
  ${[t.mB2, t.fontLight, t.textGray900]}
`;

const InputTag = styled(Input)`
  ${[t.bgGray200, t.border0]}
`;

export default InputComponent;

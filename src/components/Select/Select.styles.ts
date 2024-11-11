import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

import { ThemedText } from '../ThemedText/ThemedText';

export const Container = styled.View``;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  border: none;
  padding: 0px 18px;
  width: 100%;
  height: 50px;
  border-radius: 12px;
  background-color: ${Colors.darkOpacity};
`;

export const MessageError = styled(ThemedText)`
  color: ${Colors.red};
  margin-top: 4px;
  padding-left: 18px;
  min-height: 24px;
`;

export const pickerStyle = {
  inputIOS: {
    paddingTop: 14,
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'RobotoRegular',
  },
  inputAndroid: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'RobotoRegular',
  },
  placeholder: {
    fontSize: 16,
    color: Colors.gray300,
    fontFamily: 'RobotoRegular',
  },
};

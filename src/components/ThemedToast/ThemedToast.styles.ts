import { Platform, Animated } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  position: absolute;
  z-index: 10;
  top: ${Platform.OS === 'ios' ? 65 : 40}px;
  left: 10px;
  border-radius: 8px;
  height: 56px;
  width: 95%;
  justify-content: center;
  padding: 0 16px;
`;

export const ContainerMesssage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Message = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
`;

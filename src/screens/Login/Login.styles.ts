import { ImageBackground } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(ImageBackground)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ContainerText = styled.View`
  width: 90%;
  margin-top: 30%;
`;

export const Containerbuttons = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const ContainerModal = styled.View`
  padding: 20px;
`;

export const ContainerInputs = styled.View`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const ContainerButton = styled.View`
  align-items: center;
`;

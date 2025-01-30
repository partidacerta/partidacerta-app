import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const ContainerImageProfile = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 140px;
  height: 140px;
  margin-bottom: 10px;
  border-radius: 100px;
  border-color: ${Colors.blue};
  background-color: ${Colors.white};
  margin-bottom: 40px;
`;

export const RowInputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerSports = styled.View`
  background-color: ${Colors.darkOpacity};
  padding: 18px;
  border-radius: 12px;
`;

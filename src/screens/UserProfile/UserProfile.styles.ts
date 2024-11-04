import styled from 'styled-components/native';
import { Colors } from '@/src/constants/Colors';

export const Container = styled.View`
  height: 100%;
  background-color: ${Colors.darkBlue};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 70px;
`;

export const ButtonSettings = styled.View`
  position: absolute;
  top: 60px;
  right: 32px;
`;

export const Profile = styled.View`
  justify-content: center;
  align-items: center;
`;

export const BoxText = styled.View`
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 140px;
  height: 140px;
  margin-bottom: 10px;
  border-radius: 100px;
  border-color: ${Colors.blue};
  background-color: ${Colors.white};
`;

export const BoxProfile = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EditProfile = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 4px 10px;
  border-width: 2px;
  border-radius: 24px;
  border-color: ${Colors.white};
`;

export const PlayerInformation = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: -55px;
`;

export const Box = styled.View`
  width: 106px;
  height: 110px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${Colors.gray850};
`;

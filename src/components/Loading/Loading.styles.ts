import { BlurView } from 'expo-blur';
import styled from 'styled-components/native';

export const ContainerBlurView = styled(BlurView).attrs({
  intensity: 10,
  tint: 'dark',
})`
  flex: 1;
  position: absolute;
  z-index: 99999;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

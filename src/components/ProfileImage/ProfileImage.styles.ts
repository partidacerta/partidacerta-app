import styled from 'styled-components/native';

export const ContainerImage = styled.View`
  position: relative;
  width: 140px;
  height: 140px;
  margin-bottom: 20px;
`;

export const TeamImage = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 100px;
`;

export const LoadingOverlay = styled.View`
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

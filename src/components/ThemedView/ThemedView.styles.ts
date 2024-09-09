import styled from 'styled-components/native';

interface ContainerProps {
  justifyCenter: boolean;
  alignCenter: boolean;
}

function handleAlignCenter(alignCenter: boolean) {
  return alignCenter ? 'center' : 'flex-start';
}

function handleJustifyCenter(justifyCenter: boolean) {
  return justifyCenter ? 'center' : 'flex-start';
}

export const Container = styled.View<ContainerProps>`
  padding: 20px;
  height: 100%;
  align-items: ${({ alignCenter }) => handleAlignCenter(alignCenter)};
  justify-content: ${({ justifyCenter }) => handleJustifyCenter(justifyCenter)};
`;

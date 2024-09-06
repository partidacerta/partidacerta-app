import styled from 'styled-components/native';

interface ContainerProps {
  justifyContent: boolean;
  alignItems: boolean;
}

function handleAlignItems(isAlign: boolean) {
  return isAlign ? 'center' : 'flex-start';
}

function handleJustifyContent(isAlign: boolean) {
  return isAlign ? 'center' : 'flex-start';
}

export const Container = styled.View<ContainerProps>`
  padding: 20px;
  height: 100%;
  align-items: ${({ alignItems }) => handleAlignItems(alignItems)};
  justify-content: ${({ justifyContent }) =>
    handleJustifyContent(justifyContent)};
`;

import styled from 'styled-components/native';

interface ContentProps {
  backgroundColor: string;
  borderRadius: number;
}

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View<ContentProps>`
  padding: 6px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
`;

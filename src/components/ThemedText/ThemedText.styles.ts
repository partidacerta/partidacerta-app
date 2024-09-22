import styled from 'styled-components/native';

interface ThemedTextProps {
  textAlign?: string;
  width?: string;
}

export const Default = styled.Text<ThemedTextProps>`
  font-size: 14px;
  line-height: 24px;
  font-family: 'RobotoRegular';
  width: ${({ width }) => (width ? width : 'auto')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
`;

export const Title = styled.Text<ThemedTextProps>`
  font-size: 20px;
  line-height: 32px;
  font-family: 'RobotoBold';
  width: ${({ width }) => (width ? width : 'auto')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
`;

export const Bold = styled.Text<ThemedTextProps>`
  font-size: 14px;
  line-height: 24px;
  font-family: 'RobotoBold';
  width: ${({ width }) => (width ? width : 'auto')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
`;

export const SemiBold = styled.Text<ThemedTextProps>`
  font-size: 14px;
  line-height: 24px;
  font-family: 'RobotoMedium';
  width: ${({ width }) => (width ? width : 'auto')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
`;

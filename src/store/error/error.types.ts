// import { SvgProps } from 'react-native-svg';

export interface ErrorStoreProps {
  hasError: boolean;
  error: string;
  type: keyof MessageTypes | null;
  title: string;
  buttonText?: string;
  route?: string;
  color: string;
  showErrorMessage: (
    title: string,
    error: string,
    type: keyof MessageTypes,
    buttonText?: string,
    route?: string,
    back?: boolean
  ) => void;
  closePopup: () => void;
  changeColor: (color: string) => void;
  back: boolean;
}

interface MessageObjectType {
  color: string;
  // icon: React.FC<SvgProps>;
}

export interface MessageTypes {
  error: MessageObjectType;
  success: MessageObjectType;
  warning: MessageObjectType;
}

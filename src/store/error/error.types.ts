export interface ErrorStoreProps {
  hasError: boolean;
  message: string;
  type: keyof MessageTypes | null;
  color: string;
  showErrorMessage: (message: string, type: keyof MessageTypes) => void;
  closePopup: () => void;
  changeColor: (color: string) => void;
}

interface MessageObjectType {
  color: string;
}

export interface MessageTypes {
  error: MessageObjectType;
  success: MessageObjectType;
  warning: MessageObjectType;
}

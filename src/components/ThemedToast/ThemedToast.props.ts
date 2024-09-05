export interface ThemedToastProps {
  type: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
  closeToast?: (status: boolean) => void;
}

export interface useThemedToastControllerProps {
  closeToast?: (status: boolean) => void;
  duration?: number;
}

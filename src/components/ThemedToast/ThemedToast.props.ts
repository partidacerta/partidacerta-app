export interface ThemedToastProps {
  type: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
  closeToast?: (status: boolean) => void;
}

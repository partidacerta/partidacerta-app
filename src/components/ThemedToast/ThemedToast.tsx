import React from 'react';
import { ToastProvider } from 'react-native-toast-notifications';

import { ThemedToastProps } from './ThemedToast.types';

export function ThemedToast({ children }: ThemedToastProps) {
  return (
    <ToastProvider
      placement="top"
      duration={4000}
      animationType="slide-in"
      animationDuration={350}
      // successColor={Colors.orange}
      // dangerColor={Colors.orange}
      // warningColor={Colors.orange}
      // normalColor={Colors.orange}
      // offset={50}
      // offsetTop={30}
      // offsetBottom={80}
      // swipeEnabled={true}
    >
      {children}
    </ToastProvider>
  );
}

import { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import { useThemedToastControllerProps } from './ThemedToast.props';

export const useThemedToastController = ({
  closeToast,
  duration,
}: useThemedToastControllerProps) => {
  const [slideAnimeted] = useState(new Animated.Value(300));

  useEffect(() => {
    Animated.timing(slideAnimeted, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(slideAnimeted, {
        toValue: 600,
        duration: 300,
        useNativeDriver: true,
      }).start();
      closeToast && closeToast(false);
    }, duration ?? 3000);

    return () => clearTimeout(timer);
  }, []);

  function getIconName(type: 'success' | 'error' | 'info') {
    switch (type) {
      case 'success':
        return 'checkmark';
      case 'error':
        return 'close';
      case 'info':
        return 'information-circle-outline';
      default:
        return 'alert-circle-outline';
    }
  }

  return { slideAnimeted, getIconName };
};

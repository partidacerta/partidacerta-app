import React, { ReactElement } from 'react';

import useErrorStore from '../../store/error/error.store';
import { ThemedToast } from '../ThemedToast/ThemedToast';

export default function ToastPopup(): ReactElement {
  const { hasError, type, closePopup, message } = useErrorStore();

  if (hasError) {
    return (
      <ThemedToast
        type={type === 'error' ? 'error' : 'success'}
        duration={3400}
        message={message}
        closeToast={closePopup}
      />
    );
  }

  return null as unknown as ReactElement;
}

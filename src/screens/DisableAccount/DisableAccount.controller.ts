import { useState } from 'react';

import { IUseDisableAccountProps } from './DisableAccount.types';

export const useDisableAccountController = (): IUseDisableAccountProps => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const handleDisableAccount = () => {
    setModalVisible(false);
  };

  return {
    isModalVisible,
    handleOpenModal,
    handleCloseModal,
    handleDisableAccount,
  };
};

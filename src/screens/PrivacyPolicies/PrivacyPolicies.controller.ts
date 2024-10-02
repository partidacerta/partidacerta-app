import { useState } from 'react';

import { router } from 'expo-router';

import useAuthStore from '@/src/store/auth/auth.store';

import { IUsePrivacyPoliciesControllerProps } from './PrivacyPolicies.types';

export const usePrivacyPoliciesController =
  (): IUsePrivacyPoliciesControllerProps => {
    const { setUserDataSignIn } = useAuthStore();

    const [isCheckedPrivacyPolicies, setIsCheckedPrivacyPolicies] =
      useState(false);

    const onSubmitConfirmPrivacyPolicies = () => {
      setUserDataSignIn({
        isAcceptedPrivacyPolicies: isCheckedPrivacyPolicies,
      });

      router.push('/RegisterUserInfo.stack');
    };

    return {
      isCheckedPrivacyPolicies,
      setIsCheckedPrivacyPolicies,
      onSubmitConfirmPrivacyPolicies,
    };
  };

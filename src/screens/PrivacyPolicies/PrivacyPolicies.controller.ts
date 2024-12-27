import { useState } from 'react';

import { router } from 'expo-router';

import useAuthStore from '@/src/store/auth/auth.store';

import { useRoute } from '@react-navigation/native';

import { IUsePrivacyPoliciesControllerProps } from './PrivacyPolicies.types';

export const usePrivacyPoliciesController =
  (): IUsePrivacyPoliciesControllerProps => {
    const { setUserDataSignIn } = useAuthStore();

    const route = useRoute();
    const { fromScreen } = (route.params || {}) as { fromScreen?: string };

    const [isCheckedPrivacyPolicies, setIsCheckedPrivacyPolicies] =
      useState(false);

    const onSubmitConfirmPrivacyPolicies = () => {
      setUserDataSignIn({
        isAcceptedPrivacyPolicies: isCheckedPrivacyPolicies,
      });

      router.push('/RegisterUserInfo.stack');
    };

    return {
      fromScreen,
      isCheckedPrivacyPolicies,
      setIsCheckedPrivacyPolicies,
      onSubmitConfirmPrivacyPolicies,
    };
  };

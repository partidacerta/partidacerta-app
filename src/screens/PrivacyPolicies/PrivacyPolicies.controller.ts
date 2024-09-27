import { useState } from 'react';

import { router } from 'expo-router';

import useSignInStore from '@/src/store/signIn/signIn.store';

import { IUsePrivacyPoliciesControllerProps } from './PrivacyPolicies.types';

export const usePrivacyPoliciesController =
  (): IUsePrivacyPoliciesControllerProps => {
    const { setUserDataSignIn } = useSignInStore();

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

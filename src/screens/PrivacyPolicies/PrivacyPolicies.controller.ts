import { useState } from 'react';

import { router } from 'expo-router';

import { IUsePrivacyPoliciesControllerProps } from './PrivacyPolicies.types';

export const usePrivacyPoliciesController =
  (): IUsePrivacyPoliciesControllerProps => {
    const [isCheckedPrivacyPolicies, setIsCheckedPrivacyPolicies] =
      useState(false);

    const onSubmitConfirmPrivacyPolicies = () => {
      router.push('/(home)');
    };

    return {
      isCheckedPrivacyPolicies,
      setIsCheckedPrivacyPolicies,
      onSubmitConfirmPrivacyPolicies,
    };
  };

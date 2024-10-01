import { useState } from 'react';

import { router } from 'expo-router';

import useAuthStore from '@/src/store/auth/auth.store';

import { IUseRegisterUserSportsControllerProps } from './RegisterUserSports.types';

export const useRegisterUserSportsController =
  (): IUseRegisterUserSportsControllerProps => {
    const { setUserDataSignIn, authRegister } = useAuthStore();

    const [sportsSelected, setSportsSelecteds] = useState<string[]>([]);

    const handleSportsSelecteds = (sport: string) => {
      setSportsSelecteds(prevSelected => {
        if (prevSelected.includes(sport)) {
          return prevSelected.filter(selectedSport => selectedSport !== sport);
        } else {
          return [...prevSelected, sport];
        }
      });
    };

    const onSubmitRegisterUserSports = () => {
      setUserDataSignIn({
        sports: sportsSelected,
      });

      authRegister();

      router.push('/(home)');
    };

    const dataSports = ['soccer', 'volleyball'];

    return {
      dataSports,
      handleSportsSelecteds,
      sportsSelected,
      onSubmitRegisterUserSports,
    };
  };

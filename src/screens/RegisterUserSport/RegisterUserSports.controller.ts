import { useState } from 'react';

import { router } from 'expo-router';

import useSignInStore from '@/src/store/signIn/signIn.store';

import { IUseRegisterUserSportsControllerProps } from './RegisterUserSports.types';

export const useRegisterUserSportsController =
  (): IUseRegisterUserSportsControllerProps => {
    const { setUserDataSignIn } = useSignInStore();

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

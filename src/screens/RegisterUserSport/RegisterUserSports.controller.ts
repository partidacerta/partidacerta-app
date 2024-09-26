import { useState } from 'react';

import { router } from 'expo-router';

import { IUseRegisterUserSportsControllerProps } from './RegisterUserSports.types';

export const useRegisterUserSportsController =
  (): IUseRegisterUserSportsControllerProps => {
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

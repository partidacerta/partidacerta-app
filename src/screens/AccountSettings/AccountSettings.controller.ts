import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useUserStore from '@/src/store/user/user.store';

import {
  FormRequiredEditAccount,
  IUseAccountSettingsProps,
} from './AccountSettings.types';
import { normalizeDate } from '@/src/utils/formatDate';

export const useAccountSettingsController = (): IUseAccountSettingsProps => {
  const { userData, isLoading, updateUser } = useUserStore();

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    nickname: yup.string().required('O nickname é obrigatório'),
    email: yup.string().required('O e-mail é obrigatório'),
    birthdate: yup.string().required('A data de nascimento é obrigatório'),
    phone: yup.string().required('O telefone é obrigatório'),
    uf: yup.string().required('A UF é obrigatório'),
    city: yup.string().required('A cidade é obrigatória'),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormRequiredEditAccount>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: userData?.name,
      nickname: userData?.nickname,
      email: userData?.email,
      birthdate: userData?.birthdate || '',
      phone: userData?.phone,
      uf: userData?.uf,
      city: userData?.city,
    },
  });

  const shouldDisabledButton = !isValid;

  const onSubmitEditUser = async (formData: FormRequiredEditAccount) => {
    const formattedData = {
      ...formData,
      phone: formData.phone.replace(/\D/g, ''),
      birthdate: normalizeDate(formData.birthdate),
    };
    updateUser(userData?.id || '', formattedData);
  };

  return {
    userData,
    handleSubmit,
    onSubmitEditUser,
    control,
    errors,
    isLoading,
    shouldDisabledButton,
  };
};

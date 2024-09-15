import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormRequiredVerifyCode,
  IUseVerifyCodeControllerProps,
} from './VerifyCode.types';
import { router } from 'expo-router';

export const useVerifyCodeController = (): IUseVerifyCodeControllerProps => {
  const schema = yup.object().shape({
    code: yup
      .string()
      .length(6, 'O código deve ter 6 dígitos')
      .required('O código é obrigatório'),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormRequiredVerifyCode>({
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitVerifyCode = async (): Promise<void> => {
    const { code } = getValues();

    // verifyCode({ code: code });
    router.push('./VerifyCode.stack');
  };

  return {
    isValid,
    errors,
    control,
    handleSubmit,
    onSubmitVerifyCode,
  };
};

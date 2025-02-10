import { useState } from 'react';

import { router } from 'expo-router';

import useAuthStore from '@/src/store/auth/auth.store';
import useErrorStore from '@/src/store/error/error.store';

import { useRoute } from '@react-navigation/native';

import { IUsePrivacyPoliciesControllerProps } from './PrivacyPolicies.types';

import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export const usePrivacyPoliciesController =
  (): IUsePrivacyPoliciesControllerProps => {
    const { setUserDataSignIn } = useAuthStore();

    const { showErrorMessage } = useErrorStore();

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

    const handleDownloadPdf = async () => {
      try {
        const pdfUrl =
          'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'; //alterar para a url do backend quando o contrato estiver pronto
        const fileUri = FileSystem.documentDirectory + 'privacy_policies.pdf';

        const { uri } = await FileSystem.downloadAsync(pdfUrl, fileUri);

        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(uri);
        }

        showErrorMessage('Arquivo baixado com sucesso!', 'success');
      } catch (error) {
        console.error('Erro ao baixar o PDF:', error);
        showErrorMessage('Não foi possível baixar o arquivo.', 'error');
      }
    };

    return {
      fromScreen,
      isCheckedPrivacyPolicies,
      setIsCheckedPrivacyPolicies,
      onSubmitConfirmPrivacyPolicies,
      handleDownloadPdf,
    };
  };

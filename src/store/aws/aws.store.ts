import { create } from 'zustand';

import { uploadFileRequest } from '@/src/services/aws/aws.request';
import { triggerError } from '@/src/helpers/triggerError';

import { AwsStoreProps } from './aws.types';
import { FailedRequestUploadFile } from './aws.message';

const initialState = { isLoading: false, uploadedFileUrl: undefined };

const useAwsStore = create<AwsStoreProps>((set, get) => ({
  ...initialState,

  uploadFile: async (fileUri: string) => {
    const { makeAsync } = get();
    const handle = async (): Promise<void> => {
      set({ isLoading: true });

      const uploadedUrl = await uploadFileRequest(fileUri);

      if (uploadedUrl) {
        set({ uploadedFileUrl: uploadedUrl });
      }

      set({ isLoading: false });
    };

    const onError = (): void => {
      triggerError(FailedRequestUploadFile.message);
    };

    void makeAsync({ handle, onError });
  },

  makeAsync: async ({ handle, onError, onFinally }) => {
    try {
      await handle();
    } catch (error) {
      if (onError != null) {
        return onError(error);
      }
    } finally {
      if (onFinally != null) onFinally();
      set({ isLoading: false });
    }
  },
}));

export default useAwsStore;

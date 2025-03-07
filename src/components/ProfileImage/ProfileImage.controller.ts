import * as ImagePicker from 'expo-image-picker';

import { useEffect } from 'react';

import useAwsStore from '@/src/store/aws/aws.store';

import {
  IUseProfileImageControllerProps,
  ProfileImageControllerProps,
} from './ProfileImage.types';

export const useProfileImageController = ({
  onImageChange,
}: ProfileImageControllerProps): IUseProfileImageControllerProps => {
  const { uploadFile, uploadedFileUrl, isLoading } = useAwsStore();

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('É necessário conceder permissão para acessar a galeria.');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      uploadFile(pickerResult.assets[0].uri);
    }
  };

  useEffect(() => {
    if (uploadedFileUrl) {
      onImageChange(uploadedFileUrl);
    }
  }, [uploadedFileUrl]);

  return { pickImage, loading: isLoading };
};

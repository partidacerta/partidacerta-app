import { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';

import { uploadImageToS3 } from '@/src/services/aws/aws.request';

import {
  IUseProfileImageControllerProps,
  ProfileImageControllerProps,
} from './ProfileImage.types';

export const useProfileImageController = ({
  onImageChange,
}: ProfileImageControllerProps): IUseProfileImageControllerProps => {
  const [loading, setloading] = useState(false);

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
      setloading(true);
      try {
        const s3ImageUrl = await uploadImageToS3(pickerResult.assets[0].uri);
        onImageChange(s3ImageUrl);
      } catch (error) {
        alert('Erro ao fazer upload da imagem');
      } finally {
        setloading(false);
      }
    }
  };

  return { pickImage, loading };
};

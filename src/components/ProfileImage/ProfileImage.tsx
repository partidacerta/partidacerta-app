import * as ImagePicker from 'expo-image-picker';

import { Button } from '@/src/components/Button/Button';
import { Colors } from '@/src/constants/Colors';

import * as S from './ProfileImage.styles';
import { ProfileImageProps } from './ProfileImage.types';

const ProfileImage: React.FC<ProfileImageProps> = ({
  imageUri,
  onImageChange,
}) => {
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
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
      onImageChange(pickerResult.assets[0].uri);
    }
  };

  return (
    <S.ContainerImage>
      <S.TeamImage source={{ uri: imageUri }} />
      <Button
        icon="pencil"
        sizeIcon={18}
        colorIcon={Colors.white}
        style={{
          position: 'absolute',
          top: 96,
          right: 8,
          width: 32,
          height: 32,
          backgroundColor: Colors.blue700,
        }}
        onPress={pickImage}
      />
    </S.ContainerImage>
  );
};

export default ProfileImage;

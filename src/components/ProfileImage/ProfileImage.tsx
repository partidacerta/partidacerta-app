import { ActivityIndicator } from 'react-native';

import { Button } from '@/src/components/Button/Button';
import { Colors } from '@/src/constants/Colors';

import { useProfileImageController } from './ProfileImage.controller';
import * as S from './ProfileImage.styles';
import { ProfileImageProps } from './ProfileImage.types';

const ProfileImage: React.FC<ProfileImageProps> = ({
  imageUri,
  onImageChange,
}) => {
  const { pickImage, loading } = useProfileImageController({ onImageChange });

  return (
    <S.ContainerImage>
      {imageUri && <S.TeamImage source={{ uri: imageUri }} />}

      {loading && (
        <S.LoadingOverlay>
          <ActivityIndicator color={Colors.white} />
        </S.LoadingOverlay>
      )}

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

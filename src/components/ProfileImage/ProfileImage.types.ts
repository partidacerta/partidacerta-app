export interface ProfileImageProps {
  imageUri: string | undefined;
  onImageChange: (uri: string) => void;
}

export interface IUseProfileImageControllerProps {
  pickImage: () => Promise<void>;
  loading: boolean;
}

export interface ProfileImageControllerProps {
  onImageChange: (uri: string) => void;
}

import { instanceImage } from '../api/api';
import { FileData } from './aws.dto';

export const uploadFileRequest = async (fileUri: string): Promise<string> => {
  try {
    const formData = new FormData();
    const fileName = fileUri.split('/').pop() || 'image.jpg';

    const file: FileData = {
      uri: fileUri,
      name: fileName,
      type: 'image/jpeg',
    };

    formData.append('file', file as unknown as Blob);

    const { data } = await instanceImage.post('/s3/upload/file', formData);

    return data;
  } catch (error) {
    throw new Error('Erro ao fazer upload da imagem');
  }
};

export type AwsStoreProps = {
  isLoading: boolean;
  uploadedFileUrl?: string;
  uploadFile: (fileUri: string) => Promise<void>;
  makeAsync: <T>(props: {
    handle: () => Promise<T>;
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  }) => Promise<void>;
};

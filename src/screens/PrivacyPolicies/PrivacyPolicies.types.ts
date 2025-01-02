export interface IUsePrivacyPoliciesControllerProps {
  fromScreen: string | undefined;
  isCheckedPrivacyPolicies: boolean;
  setIsCheckedPrivacyPolicies: (_: boolean) => void;
  onSubmitConfirmPrivacyPolicies: () => void;
  handleDownloadPdf: () => Promise<void>;
}

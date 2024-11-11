export interface IUseGeneralSettingsProps {
  handleLogout: () => void;
  isModalVisible: boolean;
  handleCloseModal: () => void;
  menuItems: MenuItem[];
}

type IconName =
  | 'person-outline'
  | 'key-outline'
  | 'remove-circle-outline'
  | 'document-text-outline'
  | 'log-out-outline';

export interface MenuItem {
  iconName: IconName;
  label: string;
  action?: () => void;
}

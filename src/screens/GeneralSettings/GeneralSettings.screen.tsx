import { Ionicons } from '@expo/vector-icons';

import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import { Colors } from '@/src/constants/Colors';

import ModalLogout from './components/ModalLogout';
import { useGeneralSettingsController } from './GeneralSettings.controller';
import * as S from './GeneralSettings.styles';

import { TouchableOpacity } from 'react-native';

export default function GeneralSettingsScreen() {
  const { handleLogout, isModalVisible, handleCloseModal, menuItems } =
    useGeneralSettingsController();

  return (
    <ThemedScrollView>
      <ThemedText type="title" style={{ marginBottom: 20 }}>
        Configurações Gerais
      </ThemedText>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} onPress={item.action}>
          <S.Container>
            <S.LeftSide>
              <Ionicons name={item.iconName} size={24} color={Colors.white} />
              <ThemedText type="semiBold">{item.label}</ThemedText>
            </S.LeftSide>
            <S.RightSide>
              <Ionicons
                name={'arrow-forward-outline'}
                size={24}
                color={Colors.white}
              />
            </S.RightSide>
          </S.Container>
          {index < menuItems.length - 1 && <S.Divider />}
        </TouchableOpacity>
      ))}

      <ModalLogout
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onLogout={handleLogout}
      />
    </ThemedScrollView>
  );
}

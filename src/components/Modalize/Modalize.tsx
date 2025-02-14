import {
  Modal as RNModal,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import { useModalizeController } from './Modalize.controller';
import * as S from './Modalize.styles';
import { ModalizeProps } from './Modalize.types';

const Modalize: React.FC<ModalizeProps> = ({ visible, onClose, children }) => {
  const { translateY } = useModalizeController({ visible });

  return (
    <RNModal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <S.Container>
          <TouchableWithoutFeedback>
            <Animated.View
              style={{ ...S.Content, transform: [{ translateY }] }}
            >
              <S.Content>{children}</S.Content>
            </Animated.View>
          </TouchableWithoutFeedback>
        </S.Container>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

export default Modalize;

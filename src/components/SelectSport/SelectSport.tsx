import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Basketball from '@/src/assets/svgs/images/basketball.svg';
import Soccer from '@/src/assets/svgs/images/soccer.svg';
import Tennis from '@/src/assets/svgs/images/tennis.svg';
import Volleyball from '@/src/assets/svgs/images/volleyball.svg';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

import * as S from './SelectSport.styles';
import { SelectSportProps } from './SelectSport.types';

const SelectSport: React.FC<SelectSportProps> = ({
  selectedSport,
  onSelectSport,
  error,
}) => {
  const sports = [
    { name: 'Futebol', icon: <Soccer />, value: 'SOCCER' },
    { name: 'Vôlei', icon: <Volleyball />, value: 'VOLLEYBALL' },
    { name: 'Padel', icon: <Tennis />, value: 'PADEL' },
    { name: 'Tênis', icon: <Tennis />, value: 'TENNIS' },
    { name: 'Basquete', icon: <Basketball />, value: 'BASKETBALL' },
  ];

  return (
    <S.ContainerSport>
      <ThemedText type="semiBold" style={{ fontSize: 12 }}>
        Esporte
      </ThemedText>
      <S.ContainerBox>
        {sports.map(sport => (
          <TouchableOpacity
            key={sport.value}
            activeOpacity={0.7}
            onPress={() => onSelectSport(sport.value)}
          >
            <S.Box>
              <S.Sport
                style={{
                  backgroundColor:
                    selectedSport === sport.value
                      ? Colors.blue
                      : Colors.darkOverlay,
                }}
              >
                {sport.icon}
              </S.Sport>
              <ThemedText type="semiBold" style={{ fontSize: 12 }}>
                {sport.name}
              </ThemedText>
              {selectedSport === sport.value && (
                <S.ContainerCheck>
                  <Ionicons name="checkmark" size={12} color="white" />
                </S.ContainerCheck>
              )}
            </S.Box>
          </TouchableOpacity>
        ))}
      </S.ContainerBox>
      <S.MessageError>{error}</S.MessageError>
    </S.ContainerSport>
  );
};

export default SelectSport;

import { ScrollView, TouchableOpacity } from 'react-native';

import Basketball from '@/src/assets/svgs/images/basketball.svg';
import Soccer from '@/src/assets/svgs/images/soccer.svg';
import Tennis from '@/src/assets/svgs/images/tennis.svg';
import Volleyball from '@/src/assets/svgs/images/volleyball.svg';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

import * as S from './SportsFilter.styles';
import { SportsFilterProps } from './SportsFilter.types';

const SportsFilter: React.FC<SportsFilterProps> = ({
  selectedSport,
  onSelectSport,
}) => {
  const sports = [
    {
      name: 'Futebol',
      icon: <Soccer width={24} height={24} />,
      value: 'SOCCER',
    },
    {
      name: 'Vôlei',
      icon: <Volleyball width={24} height={24} />,
      value: 'VOLLEYBALL',
    },
    {
      name: 'Basquete',
      icon: <Basketball width={24} height={24} />,
      value: 'BASKETBALL',
    },
    { name: 'Padel', icon: <Tennis width={24} height={24} />, value: 'PADEL' },
    { name: 'Tênis', icon: <Tennis width={24} height={24} />, value: 'TENNIS' },
  ];

  return (
    <S.ContainerSport>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <S.ContainerBox>
          {sports.map(sport => (
            <TouchableOpacity
              key={sport.value}
              activeOpacity={0.7}
              onPress={() => {
                onSelectSport(
                  selectedSport === sport.value ? null : sport.value
                );
              }}
            >
              <S.Sport
                style={{
                  backgroundColor:
                    selectedSport === sport.value
                      ? Colors.blue
                      : Colors.darkOverlay,
                }}
              >
                {sport.icon}
                <ThemedText type="bold">{sport.name}</ThemedText>
              </S.Sport>
            </TouchableOpacity>
          ))}
        </S.ContainerBox>
      </ScrollView>
    </S.ContainerSport>
  );
};

export default SportsFilter;

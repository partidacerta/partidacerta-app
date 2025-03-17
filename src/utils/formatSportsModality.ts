const sportTranslations: Record<string, string> = {
  VOLLEYBALL: 'Vôlei',
  BASKETBALL: 'Basketball',
  SOCCER: 'Futebol',
  PADEL: 'Padel',
  TENNIS: 'Tennis',
};

const modalityTranslations: Record<string, string> = {
  FUTSAL: 'Futsal',
  FOOTBALL_SOCIETY: 'Society',
  INDOOR_VOLLEYBALL: 'Vôlei de Quadra',
  BEACH_VOLLEYBALL: 'Vôlei de Praia',
  FOOTVOLLEY: 'Futevôlei',
  BASKETBALL_3X3: 'Basquete 3x3',
  BASKETBALL_5X5: 'Basquete 5x5',
  TABLE_TENNIS: 'Tênis de Mesa',
  BEACH_TENNIS: 'Beach Tênis',
};

export const formatSportsModality = (
  sport: string | undefined,
  modality: string | undefined
): string => {
  const translatedSport = sportTranslations[sport || ''] || sport;

  if (sport === 'PADEL' && modality === 'NOT_INFORMED') {
    return translatedSport || '';
  }

  const translatedModality = modalityTranslations[modality || ''] || modality;
  return `${translatedSport} - ${translatedModality}` || '';
};

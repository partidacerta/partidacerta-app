import Basketball from '@/src/assets/svgs/images/basketball.svg';
import Soccer from '@/src/assets/svgs/images/soccer.svg';
import Tennis from '@/src/assets/svgs/images/tennis.svg';
import Volleyball from '@/src/assets/svgs/images/volleyball.svg';

export const formatSportsIcon = (sport: string | undefined) => {
  if (!sport) return null;
  switch (sport) {
    case 'SOCCER':
      return <Soccer width={26} height={26} />;
    case 'VOLLEYBALL':
      return <Volleyball width={26} height={26} />;
    case 'BASKETBALL':
      return <Basketball width={26} height={26} />;
    case 'PADEL':
      return <Tennis width={26} height={26} />;
    case 'TENNIS':
      return <Tennis width={26} height={26} />;
    default:
      return null;
  }
};

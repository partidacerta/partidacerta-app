export interface SelectSportProps {
  selectedSport: string | null;
  onSelectSport: (sport: string) => void;
  error: string | undefined;
}

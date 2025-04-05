export interface SportsFilterProps {
  selectedSport: string | null;
  onSelectSport: (sport: string | null) => void;
}

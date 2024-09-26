export interface IUseRegisterUserSportsControllerProps {
  dataSports: string[];
  sportsSelected: string[];
  handleSportsSelecteds: (sport: string) => void;
  onSubmitRegisterUserSports: () => void;
}

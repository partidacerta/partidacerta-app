/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const bluePrimary = '#0F187D';
const darkBlue = '#181829';
const white = '#fff';
const textLight = '#11181C';
const iconsLight = '#687076';
const iconsDark = '#9BA1A6';

export const Colors = {
  light: {
    text: textLight,
    background: white,
    icon: iconsLight,
    tabIconDefault: iconsLight,
    tabIconSelected: bluePrimary,
    borderColor: bluePrimary,
  },
  dark: {
    text: white,
    background: darkBlue,
    icon: iconsDark,
    tabIconDefault: iconsDark,
    tabIconSelected: white,
    borderColor: white,
  },

  white: white,
  black: '#000',

  gray100: '#E1E1E6',
  gray200: '#A9A9B2',
  gray300: '#828282',
  gray400: '#636363',
  gray500: '#505059',
  gray600: '#333333',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',

  blue: bluePrimary,

  darkBlue: darkBlue,
  darkOpacity: '#22262F80',

  green: '#32C07C',
  lightGreen: '#E3F5E1',

  red: '#E60000',
  lightRed: '#FFF3F2',

  orange: '#FF8000',
};

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
  gray400: '#7C8591',
  gray500: '#505059',
  gray600: '#333333',
  gray700: '#29292E',
  gray800: '#25282D',
  gray850: '#22262f',
  gray900: '#121214',

  blue: bluePrimary,
  blue700: '#0D6EFD',
  blueOpacity50: '#0D6EFD80',

  darkBlue: darkBlue,
  darkBlue900: '#161842',
  darkBlue800: '#1f2336',
  darkBlue700: '#262e42',
  darkBlueOpacity50: '#0A306780',
  darkOpacity: '#22262F80',
  darkOverlay: 'rgba(16, 18, 22, 0.5)',

  green: '#32C07C',
  green900: '#14AE5C',
  lightGreen: '#E3F5E1',

  red: '#E60000',
  lightRed: '#FFF3F2',

  yellow600: '#ACA61C',

  orange: '#FF8000',
};

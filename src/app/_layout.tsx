import { useEffect } from 'react';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';

import 'react-native-reanimated';

import '../helpers/reactotronConfig';
import ToastPopup from '../components/ToastPopup/ToastPopup';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const colorScheme = 'dark';

  const [loaded] = useFonts({
    RobotoBold: require('../../assets/fonts/Roboto-Bold.ttf'),
    RobotoBoldItalic: require('../../assets/fonts/Roboto-BoldItalic.ttf'),
    RobotoItalic: require('../../assets/fonts/Roboto-Italic.ttf'),
    RobotoLight: require('../../assets/fonts/Roboto-Light.ttf'),
    RobotoLightItalic: require('../../assets/fonts/Roboto-LightItalic.ttf'),
    RobotoMedium: require('../../assets/fonts/Roboto-Medium.ttf'),
    RobotoMediumItalic: require('../../assets/fonts/Roboto-MediumItalic.ttf'),
    RobotoRegular: require('../../assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ToastPopup />
      <Stack
        screenOptions={{
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

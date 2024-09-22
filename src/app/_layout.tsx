import { useEffect } from 'react';
import { StatusBar } from 'react-native';

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
import { Colors } from '../constants/Colors';

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
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colorScheme === 'dark' ? Colors.black : Colors.white}
      />
      <ToastPopup />
      <Stack
        screenOptions={{
          animation: 'fade',
          headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: Colors.darkBlue,
          },
          headerTintColor: Colors.white,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="Login.stack" />
        <Stack.Screen
          name="ForgotPassword.stack"
          options={{ headerShown: true }}
        />
        <Stack.Screen name="VerifyCode.stack" options={{ headerShown: true }} />
        <Stack.Screen
          name="NewPassword.stack"
          options={{ headerShown: true }}
        />
        <Stack.Screen name="RegisterUser.stack" />
        <Stack.Screen
          name="PrivacyPolicies.stack"
          options={{ headerShown: true }}
        />
      </Stack>
    </ThemeProvider>
  );
}

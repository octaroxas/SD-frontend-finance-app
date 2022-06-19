import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login/Login';
import SignUp from './src/pages/SignUp/SignUp';
import ApplicationRoutes from './src/routes/ApplicationRoutes';
import AuthProvider from './src/contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

export default function App() {
  const [loaded] = Font.useFonts({
    Nunito_400: require('./src/assets/fonts/nunito_400.ttf'),
    Nunito_700: require('./src/assets/fonts/nunito_700.ttf'),
    Roboto_400: require('./src/assets/fonts/roboto_400.ttf'),
    Roboto_700: require('./src/assets/fonts/roboto_700.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        style='light'
        networkActivityIndicatorVisible
        animated
      />
      <AuthProvider>
        <NavigationContainer>
          <ApplicationRoutes />
        </NavigationContainer>
      </AuthProvider >
      {/* <ApplicationRoutes /> */}
    </>

  );
}

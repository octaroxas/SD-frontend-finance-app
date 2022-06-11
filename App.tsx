import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login/Login';
import SignUp from './src/pages/SignUp/SignUp';
import ApplicationRoutes from './src/routes/ApplicationRoutes';
import AuthProvider from './src/contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';

/*
export default function App() {
  return (
    <Login />
  );
}
*/

// Comente o bloco de código abaixo e descomente o acima para alternar para a tela de Login.

export default function App() {
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

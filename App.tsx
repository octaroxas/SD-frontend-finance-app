import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './src/pages/SignUp/SignUp';

export default function App() {
  return (
    <>
      <StatusBar
        style='light'
        networkActivityIndicatorVisible
        animated
      />
      <SignUp />
    </>

  );
}


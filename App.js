/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Tabs from './src/components/Tabs';
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <Tabs />
    </NativeBaseProvider>)
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;

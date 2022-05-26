import 'react-native-gesture-handler';
import './i18n/config';
import "react-native-reanimated";

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, StatusBar, LogBox} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as darkTheme} from 'constants/theme/dark.json';
import {default as lightTheme} from 'constants/theme/light.json';
import {default as customTheme} from 'constants/theme/appTheme.json';
import {default as customMapping} from 'constants/theme/mapping.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import ThemeContext from './ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContainer from 'navigation/AppContainer';
import AssetsIconsPack from 'assets/AssetsIconPack';

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
]);

export default function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');

  
  React.useEffect(() => {
    AsyncStorage.getItem('theme').then(value => {
      if (value === 'light' || value === 'dark') setTheme(value);
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    AsyncStorage.setItem('theme', nextTheme).then(() => {
      setTheme(nextTheme);
    });
  };
  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <IconRegistry icons={[EvaIconsPack, AssetsIconsPack]} />
        <ApplicationProvider
          {...eva}
          theme={
            theme === 'light'
              ? {...eva.light, ...customTheme, ...lightTheme}
              : {...eva.dark, ...customTheme, ...darkTheme}
          }
          /* @ts-ignore */
          customMapping={customMapping}>
          <SafeAreaProvider>
            <StatusBar
              barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
              translucent={true}
              backgroundColor={'#000000'}
            />
            <AppContainer cachedResources={true}/>
          </SafeAreaProvider>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

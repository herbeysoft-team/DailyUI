/*
Instagram/Twitter @herbeysoft
www.dailyui.co
*/

import React, {useState, useEffect} from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from './components/StackNavigator';
import { useFonts } from 'expo-font';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    'Aven-Black': require('./assets/fonts/XXIIAven-Black.ttf'),
    'Aven-Bold': require('./assets/fonts/XXIIAven-Bold.ttf'),
    'Aven-Light': require('./assets/fonts/XXIIAven-Light.ttf'),
    'Aven-Medium': require('./assets/fonts/XXIIAven-Medium.ttf'),
    'Aven-Regular': require('./assets/fonts/XXIIAven-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setIsLoading(false);
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider>
      <StackNavigator/>
    </SafeAreaProvider>
  );
}


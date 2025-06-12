 import { View, Text } from 'react-native'
 import React from 'react'
 import './global.css'
 import {Authprovider} from '@/AuthPro/Authprovider'
 import {
  useFonts,
 
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from '@expo-google-fonts/syne';
import { Slot, Stack } from 'expo-router'
 const _layout = () => {
  const [fontsLoaded] = useFonts({
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
});

   return (
    <Authprovider>
      <Stack screenOptions={{headerShown:false}}/>
    </Authprovider>
   ) 
 }
 
 export default _layout
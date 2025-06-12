  import { View, Text } from 'react-native'
 import React from 'react'
import { Stack } from 'expo-router'
 
 const _layout = () => {
   return (
    <Stack>
      <Stack.Screen name='(tabs)'
      options={{headerShown:false}}
      />
      <Stack.Screen name='aboutdev'
      options={{headerTitle:'About dev'}}
      />
      <Stack.Screen name='contactus'
      options={{title:'Contact us'}}
      />
      <Stack.Screen name='user/[id]'
      options={{title:'Task Details'}}
      />
      
    </Stack>
   )
 }
 
 export default _layout
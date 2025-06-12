 import { View, Text, ActivityIndicator } from 'react-native'
 import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { supabase } from '@/lip/susbaseClient';
 
 const Logout = () => {
 const router=useRouter();
  useEffect(()=>{
    let ismounted=true;
    const logout=async()=>{
      const {error}=await supabase.auth.signOut();
      if(error && ismounted) console.log(error);
      if(ismounted) router.replace('/(auth)/singin');
     
    }
    logout()
      return (()=>{
  ismounted=false
      })
    },[router])

    
    
   return (
     <View className='flex-1 justify-center items-center bg-black'>
      <ActivityIndicator size={'large'}/>
     </View>
   )
 }
 
 export default Logout
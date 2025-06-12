import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import {  FontAwesome } from "@expo/vector-icons";
import { useFonts, Syne_700Bold, Syne_400Regular } from '@expo-google-fonts/syne';
import { useRouter } from 'expo-router';
import { supabase } from '@/lip/susbaseClient';
import 'react-native-url-polyfill/auto';
const index = () => {
    const routers=useRouter();
 
  const [email,setEmail]=useState('');
  const [passwrod,setpassword]=useState('');
  const [error,seterror]=useState('');

 const handlesingin = async () => {
    const { error: signInError } = await supabase.auth.signIn({
      email,
      password: passwrod
    });

    if (signInError) {
      seterror(signInError.message);
    } else {
      routers.replace('/(drawer)/(tabs)/home/(tab)');
    }
  };
  return (
    <View className='flex-1 justify-center items-center bg-[#fff]'>
      <View className='justify-center items-center text-center   fixed top-0 '>
      <Text className='font-syne-medium text-[32px] color-[#000000]'>Welcome Back</Text>
      <Text className='font-syne-medium text-[16px] color-[#000000] text-center'>We’re glad to have you again on our JustTasks, Your personalized student planner starts here.</Text>
      </View>
      <View className='text-center mt-5'> 
      <View className='mt-16'>  
    
      <TextInput
      onChangeText={setEmail}
      value={email}
        placeholder='Email'
        className='bg-[#02182B] w-[24rem] h-16 rounded-xl mt-5 p-5  text-white placeholder:text-[#E8E9F3BF] font-syne-medium'
      />
      <TextInput
      onChangeText={setpassword}
      value={passwrod}
        placeholder='Password'
        className='bg-[#02182B] w-[24rem] h-16 rounded-xl mt-5 p-5 font-syne-medium text-white placeholder:text-[#E8E9F3BF]'
      />
      </View>
   <View className='mt-5 items-center'>
  <TouchableOpacity className='bg-[#AFFC41] w-[21.6rem] h-14 rounded-full items-center justify-center'
  onPress={handlesingin}
  >
    <Text className='text-[#02182B] font-syne-bold text-xl'>sing in</Text>
  </TouchableOpacity>
</View>
  <View className='flex-row mt-3 text-center ml-10'>
        <Text className='color-[#000000] text-[16px] mt-2 font-syne-medium'>Don’t have an account? </Text>
        <TouchableOpacity className='mt-[0.35rem]   ' onPress={()=>{routers.push('/(auth)/singup')}}> 
          <Text className='color-[#000000]  font-syne-medium ml-1 text-[16px] border-b-2 border-b-white'>Sign Up Now</Text> 
        </TouchableOpacity>
      </View>
 
      </View>
  <View className="flex-row items-center justify-center mt-10">
  <View className="w-24 h-px bg-gray-300" />
  <Text className="mx-2 font-syne-medium text-black text-[16px]">Or Sign Up with</Text>
  <View className="w-24 h-px bg-gray-300" />
</View>
<View className='mt-[]'>
<View className='flex-row justify-center gap-7  mt-6'>
  <View
    style={{
      height: 60,
      width: 60,
      borderRadius: 30,
      backgroundColor: '#D9D9D9',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <FontAwesome name="google" size={30} color="#000" />
  </View>

  <View
    style={{
      height: 60,
      width: 60,
      borderRadius: 30,
      backgroundColor: '#D9D9D9',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <FontAwesome name="facebook" size={30} color="#000" />
  </View>

  <View
    style={{
      height: 60,
      width: 60,
      borderRadius: 30,
      backgroundColor: '#D9D9D9',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <FontAwesome name="github" size={30} color="#000" />
  </View>
   
</View>
 
      
     </View>
 
    </View>
  )
}

export default index
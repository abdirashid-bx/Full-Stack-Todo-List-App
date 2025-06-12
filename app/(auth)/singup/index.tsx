import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts, Syne_700Bold, Syne_400Regular } from '@expo-google-fonts/syne';
import { useRouter } from 'expo-router';
import { supabase } from '@/lip/susbaseClient'; // ensure this import path is correct
import 'react-native-url-polyfill/auto';

const index = () => {
  const router = useRouter();

  // 🔹 States from old logic
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [passwrod, setpassword] = useState('');
  const [error, seterror] = useState('');

  // 🔹 Logic from old sign-up page
  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp(
      {
        email,
        password: passwrod,
      },
      {
        data: { fullname }
      }
    );

    if (error) {
      seterror(error.message);
    } else {
      seterror('');
      router.replace('/(auth)/singin');
    }
  };

  return (
    <View className='flex-1 justify-center items-center bg-[#fff]'>
      <View className='justify-center items-center text-center fixed top-16'>
        <Text className='font-syne-medium text-[32px] color-[#000000]'>Create Account</Text>
        <Text className='font-syne-medium text-[16px] color-[#000000] text-center'>
          Fill your information below or sing up using {"\n"} social links
        </Text>
      </View>

      <View className='text-center mt-10'>
        <View className='mt-20'>
          <TextInput
            placeholder='Full name'
            className='bg-[#02182B] w-[24rem] h-16 rounded-xl mt-5 p-5 text-white placeholder:text-[#E8E9F3BF] font-syne-medium'
            value={fullname}
            onChangeText={setFullname}
          />
          <TextInput
            placeholder='Email'
            className='bg-[#02182B] w-[24rem] h-16 rounded-xl mt-5 p-5 text-white placeholder:text-[#E8E9F3BF] font-syne-medium'
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder='Password'
            className='bg-[#02182B] w-[24rem] h-16 rounded-xl mt-5 p-5 font-syne-medium text-white placeholder:text-[#E8E9F3BF]'
            value={passwrod}
            onChangeText={setpassword}
            secureTextEntry
          />
        </View>

        {/* 🔹 Error message display */}
        {error ? (
          <Text className='text-red-500 text-center mt-4'>{error}</Text>
        ) : null}

        <View className='mt-5 items-center'>
          <TouchableOpacity
            className='bg-[#AFFC41] w-[21.6rem] h-14 rounded-full items-center justify-center'
            onPress={handleSignUp}
          >
            <Text className='text-[#02182B] font-syne-bold text-xl'>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View className='flex-row mt-3 text-center ml-10'>
          <Text className='color-[#000000] text-[16px] mt-2 font-syne-medium'>Already hava account?</Text>
          <TouchableOpacity className='mt-[0.35rem]' onPress={() => { router.push('/(auth)/singin') }}>
            <Text className='color-[#000000] font-syne-medium ml-1 text-[16px] border-b-2 border-b-white'>Login now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row items-center justify-center mt-10">
        <View className="w-24 h-px bg-gray-300" />
        <Text className="mx-2 font-syne-medium text-black text-[16px]">Or Sign Up with</Text>
        <View className="w-24 h-px bg-gray-300" />
      </View>

      <View className='flex-row justify-center gap-7 mt-6'>
        <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesome name="google" size={30} color="#000" />
        </View>
        <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesome name="facebook" size={30} color="#000" />
        </View>
        <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesome name="github" size={30} color="#000" />
        </View>
      </View>

      <View className='flex flex-row justify-center items-center mt-[5rem] p-2'>
        <Ionicons name="alert-circle" size={30} color="#000" />
        <Text className='font-syne-medium text-xs'>Don’t forget to fill your profile after signing up</Text>
      </View>
    </View>
  );
}

export default index;

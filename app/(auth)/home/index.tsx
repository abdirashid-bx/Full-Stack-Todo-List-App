import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

const Index = () => {
  return (
    <View className='flex-1 bg-[#fff] justify-center items-center'>
      
      
      <View className='bg-[#02182B] w-[30.5rem] h-[30.7rem] absolute top-0 rounded-b-[17.2rem]'>
        <Text className='font-syne-bold text-4xl text-[#AFFC41] text-center mt-24'>JustTasks</Text>
        <View className='justify-center items-center top-32'>
          <Ionicons
            name="document-text"
            color="#A8F600"
            size={96}
          />
        </View>
      </View>
 
      <View className='absolute top-[34rem] px-6'>
        <Text className='text-[#02182B] font-syne-bold text-2xl text-center mb-4'>
          Welcome to JustTasks
        </Text>
     <Text className='text-center text-[#02182B] text-[17px] font-syne-medium'>
  Your personalized student planner{"\n"}
  starts here. Let's set up your profile{"\n"}
  so we can help you manage classes,{"\n"}
  deadlines, and everything in between.{"\n"}
  Tap “Get Started” to begin your journey!
</Text>

<View className='justify-center items-center mt-12 '> 
  <TouchableOpacity className='bg-[#02182B] rounded-[1.8rem] justify-center items-center w-[13rem] h-14 ' onPress={()=>{
    const router=useRouter()
    router.replace('/(auth)/singin')
  }}>
  <Text className='text-[#AFFC41] text-xl font-syne-bold'>Get Started</Text>
</TouchableOpacity>

    </View>
      </View>
      
    </View>
  );
};

export default Index;

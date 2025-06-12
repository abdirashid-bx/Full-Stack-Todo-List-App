import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Id = () => {
     const {tittle,subje,completed,createddata,desc,usedeadline}=
     useLocalSearchParams();
  return (
    <View className='flex-1  flex items-center mt-24'
    >
       <View className='bg-[#02182B] w-[345px] h-auto rounded-2xl   items-center'>
       <Text className='font-syne-medium text-2xl color-[#AFFC41] mt-7'>Task Overview</Text>
       <View className='mt-10 gap-10 p-7'>
        <Text className='color-[#AFFC41] font-syne-medium text-[16px]'>Name:<Text className='font-syne-medium text-[16px] color-white'>{tittle}</Text></Text>
        <Text className='color-[#AFFC41] font-syne-medium text-[16px]'>Subject:<Text className='font-syne-medium text-[16px] color-white'>{subje}</Text></Text>
        <Text className='color-[#AFFC41] font-syne-medium text-[16px]'>Creation DAte:<Text className='font-syne-medium text-[16px] color-white'> {createddata}</Text></Text>
        <Text className='color-[#AFFC41] font-syne-medium text-[16px]'>Deadline:<Text className='font-syne-medium text-[16px] color-white'>{usedeadline} </Text></Text>
        <Text className='color-[#AFFC41] font-syne-medium text-[16px]'>Description: :<Text className='font-syne-medium text-[16px] color-white'>
{desc}</Text></Text>
       </View>
       </View>
    </View>
       
   
  )
}

export default Id
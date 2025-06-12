import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const contactus = () => {
  return (
    <View className='flex-1 bg-[#fff]'>
  <View className='justify-center flex ml-8 mt-10 ' >
    <Text className='font-syne-bold text-2xl text-start'>Get In Touch</Text>
    <Text className='font-syne text-[16px] color-[#000000]'>
      We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Our team is here to help and will get back to you as soon as possible.
    </Text>
  </View>

  {/* contacforms */}
   <View className=' items-center   justify-center flex mt-20 gap-5'>
  <View className='bg-[#02182B] w-[350px] h-28 rounded-lg flex-row justify-start items-center '>
    <View className='flex-row p-5'>
   <Ionicons name="mail" size={30} color="#AFFC41" style={{marginTop:5}}/>
  
   <View className='flex-col ml-3'> 
   <Text className='font-syne text-xl color-[#ffffff]'>Email</Text>
   <Text className='color-[#D9D9D9] font-syne-medium'>Info@justtasks.com</Text>
   </View>

  </View>
  <View className='flex-col absolute right-3'>
    <Text className='font-syne-medium text-xl color-[#AFFC41]'>24/7</Text>
    <Text className='text-[15px] color-[#D9D9D9]'>Support</Text>
  </View>

  </View>



    <View className='bg-[#02182B] w-[350px] h-28 rounded-lg flex-row justify-start items-center '>
    <View className='flex-row p-5'>
   <Ionicons name="call" size={30} color="#AFFC41" style={{marginTop:5}}/>
  
   <View className='flex-col ml-3'> 
   <Text className='font-syne text-xl color-[#ffffff]'>Phone Number</Text>
   <Text className='color-[#D9D9D9] font-syne-medium'>+252619480686</Text>
   <Text className='color-[#D9D9D9] font-syne-medium'>+252613733018</Text>
   </View>

  </View>
  <View className='flex-col absolute right-3'>
    <Text className='font-syne-medium text-xl color-[#AFFC41]'>24/7</Text>
    <Text className='text-[15px] color-[#D9D9D9]'>Support</Text>
  </View>

  </View>
   

     <View className='bg-[#02182B] w-[350px] h-28 rounded-lg flex-row justify-start items-center '>
    <View className='flex-row p-5'>
   <Ionicons name="logo-whatsapp" size={30} color="#AFFC41" style={{marginTop:5}}/>
  
   <View className='flex-col ml-3'> 
   <Text className='font-syne text-xl color-[#ffffff]'>Whatsapp</Text>
      <Text className='color-[#D9D9D9] font-syne-medium'>+252619480686</Text>
   <Text className='color-[#D9D9D9] font-syne-medium'>+252613733018</Text>
   </View>

  </View>
  <View className='flex-col absolute right-3'>
    <Text className='font-syne-medium text-xl color-[#AFFC41]'>24/7</Text>
    <Text className='text-[15px] color-[#D9D9D9]'>Support</Text>
  </View>

  </View>
  </View>
  </View>
  )
}

export default contactus
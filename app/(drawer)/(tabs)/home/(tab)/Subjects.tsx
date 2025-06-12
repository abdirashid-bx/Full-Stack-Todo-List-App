 import { View, Text, SafeAreaView } from 'react-native'
 import React from 'react'
import Addtask from '@/components/Addtask'
 
 const Subjects = ({subject, taskCount}:any) => {
   return (
    <SafeAreaView className='flex-1  '>
      <View className='flex-1 mt-40 mb-28  '>
    <Addtask showsubject={true}   />
      </View>
    </SafeAreaView>
   )
 }
 
 export default Subjects
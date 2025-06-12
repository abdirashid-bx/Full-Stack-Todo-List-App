import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Addtask from '@/components/Addtask'
import Tasklist from '@/components/Tasklist'

const Completed = () => {
  return (

      <SafeAreaView className='flex-1  '>
      <View className='flex-1 mt-40 mb-28  '>
      <Addtask showcompleted={true}/>
      </View>
    </SafeAreaView>
  )
}

export default Completed
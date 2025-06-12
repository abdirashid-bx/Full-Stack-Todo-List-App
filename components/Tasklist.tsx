import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React, { useRef } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
 
type task = {
  taskid: number;
  tasktitle: string;
  subject: string;
  completed:boolean
};
const Tasklist = ({task,ondelete,onCompleted,showsubject,subje}:any ) => {
  const router=useRouter();
    
  const handledetials=()=>{
    router.push({
      pathname:`/(drawer)/user/${task.taskid}`,
      params:{
         desc:task.description,
          tittle:task.tasktitle,
          subje:task.subject,
         completed:task.completed.toString(),
         createddata:task.created,
        usedeadline:task.deadline
      }
    })
    
  }
   const handleDelete = () => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => ondelete(task.taskid)
        }
      ],
      { cancelable: true }
    );
  };

  const handlecompelete=()=>{
    onCompleted(task.taskid)
  }
   
  return (
    <View className='flex-row bg-[#02182B] items-center p-4 mx-2 my-1 rounded-xl  w-[25rem] h-[6rem] ml-7 mb-5  '>
      <View>
        {!showsubject &&   <TouchableOpacity
        onPress={handlecompelete}
        >
          <FontAwesome
          name={task.completed ? "check-square" : "square-o"}
          size={24}
          color="#AFFC41"
          />
        </TouchableOpacity>
       }
        </View>
      
<View className='flex-1 flex-col ml-5'>
  {!showsubject ? <TouchableOpacity onPress={handledetials}>
    <Text className='font-syne-medium text-xl text-white' numberOfLines={1} ellipsizeMode="tail"  style={[
      task.completed ? {textDecorationLine:'line-through'}:{textDecorationLine:'none'}
   ]}>
      {task.tasktitle}
    </Text>
  </TouchableOpacity> :  <TouchableOpacity >
    <Text className='font-syne-medium text-xl text-white' numberOfLines={1} ellipsizeMode="tail"  style={[
      task.completed ? {textDecorationLine:'line-through'}:{textDecorationLine:'none'}
   ]}>
      {task.subject}
    </Text>
  </TouchableOpacity>}
  
  {!showsubject ? 
    <TouchableOpacity onPress={handledetials}>
    <Text className='text-[#E8E9F3BF] font-syne-medium text-[16px]' numberOfLines={2} ellipsizeMode="tail"
    style={[task.completed ? {textDecorationLine:'line-through'}:{textDecorationLine:'none'}

    ]}
    >
      {task.description} 
    </Text>
  </TouchableOpacity> : <TouchableOpacity >
    <Text className='text-[#E8E9F3BF] font-syne-medium text-[16px]' numberOfLines={2} ellipsizeMode="tail"
    style={[task.completed ? {textDecorationLine:'line-through'}:{textDecorationLine:'none'}

    ]}
    >
      {task.tasktitle} 
    </Text>
  </TouchableOpacity>
}
 
</View>
<View className="ml-auto self-center">
    {!showsubject ?
  <TouchableOpacity
  onPress={handleDelete }
  >
    <FontAwesome
      name="trash-o"
      size={24}
      color="#AFFC41"
    />
  </TouchableOpacity> : <View className='flex-col absolute right-3 mt-[-2rem] items-center'>
      <Text className='font-syne-medium text-xl color-[#AFFC41]'>{subje}</Text>
      <Text className='text-[15px] color-[#D9D9D9]'> Tasks</Text>
    </View>
}
</View>
    </View>
  )
}
 
 
export default Tasklist
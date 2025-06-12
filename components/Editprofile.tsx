import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '@/lip/susbaseClient';
import { ScrollView } from 'react-native-gesture-handler';
const Editprofile = ({ user }: any) => {
  const [fullname, setfullname] = useState(user.fullName || '');
  const [avatar, setavatar] = useState(user.avatar || '');
  const [useremail, setuseremail] = useState(user.useremail || '');
  const [phone, setphone] = useState(user.phone || '');
  const [sex, setsex] = useState(user.sex || '');
  const [faculty, setfaculty] = useState(user.faculty || '');
  const [samester, setsamester] = useState(user.samester || '');
  const [dep, setdep] = useState(user.dep || '');
  

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images, // Updated per deprecation
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.canceled) {
    const { uri } = result.assets[0];
    uploadImage(uri);
  }

};

const uploadImage=async (uri : any)=>{
  try{
    const response=await fetch(uri)
    const blob=await response.blob()
    const arreybuffer=await new Response(blob).arrayBuffer();
    const filepath=`${user.userid}/${Date.now()}/jpg`

    const {error}=await supabase.storage.from("avatars").upload(filepath,arreybuffer,{
      contentType:"image/jpeg",
      upsert:false
    })
    if(error) console.log(error)
  const {data,error:updata}=supabase.storage.from("avatars").getPublicUrl(filepath)
 setavatar(data?.publicURL)
 const {error:publieror}=await supabase.from('profiles')
.update({avatar_url:data?.publicURL})
.eq('id',user.userid)
if(publieror) return 'error happened wllo'
  }catch(error){
    console.log(error)
  }
}

const updatethings=async()=>{
   const update={
    full_name:fullname,
    phone,
    sex,
    Faculty:faculty,
    Samester:samester,
    department:dep
  } 

  const {error}=await supabase.from('profiles')
  .update(update)
  .eq('id',user.userid)
  if(error) return error
  
}

 
 



  return (
  <ScrollView className='flex-1'> 
    <View className=" bg-[#E8EBF5] px-6 py-10 mt-24">
        <View className="items-center mb-6">
        <TouchableOpacity onPress={pickImage }>
          <Image
            source={{
              uri: avatar || 'https://ui-avatars.com/api/?name=Guest&background=random',
            }}
            className="w-36 h-36 rounded-full border-2 border-[#AFFC41]"
          />
        </TouchableOpacity>
        <Text className="text-2xl font-syne-medium text-center mt-4 text-[#02182B]">{fullname}</Text>
      </View>
      <View className='border-l-[3px] '>
         <Text className='font-syne-medium color-[#02182B] text-xl ml-2  '>Personal info</Text>
      </View>
      <View className='mt-5 gap-3'>
          <TextInput
      
      placeholder='Email'
      value={useremail}
       placeholderTextColor="#FFFFFF"
      onChangeText={setuseremail}
 className="bg-[#02182B] w-[300px] h-14 rounded-md ml-2 pl-3 text-[#D9D9D9] font-syne-medium text-[16px]"
      />
          <TextInput
      
      placeholder='Phone'
      value={phone}
       placeholderTextColor="#FFFFFF"
      onChangeText={setphone}
 className="bg-[#02182B] w-[300px] h-14 rounded-md ml-2 pl-3 text-[#D9D9D9] font-syne-medium text-[16px]"
      />
          <TextInput
      
      placeholder='Sex'
      value={sex}
       placeholderTextColor="#FFFFFF"
      onChangeText={setsex}
 className="bg-[#02182B] w-[300px] h-14 rounded-md ml-2 pl-3 text-[#D9D9D9] font-syne-medium text-[16px]"
      />
      </View>
      <View className='border-l-[3px]  mt-5'>
         <Text className='font-syne-medium color-[#02182B] text-xl ml-2  '>Academic info</Text>
      </View>

         <View className='mt-4 gap-3'>
          <TextInput
      
      placeholder='Faculty'
      value={faculty}
       placeholderTextColor="#FFFFFF"
      onChangeText={setfaculty}
 className="bg-[#02182B] w-[300px] h-14 rounded-md ml-2 pl-3 text-[#D9D9D9] font-syne-medium text-[16px]"
      />
          <TextInput
      
      placeholder='Department'
      value={dep}
       placeholderTextColor="#FFFFFF"
      onChangeText={setdep}
 className="bg-[#02182B] w-[300px] h-14 rounded-md ml-2 pl-3 text-[#D9D9D9] font-syne-medium text-[16px]"
      />
          <TextInput
      
      placeholder='Samester'
      value={samester}
       placeholderTextColor="#FFFFFF"
      onChangeText={setsamester}
 className="bg-[#02182B] w-[300px] h-14 rounded-md ml-2 pl-3 text-[#D9D9D9] font-syne-medium text-[16px]"
      />
      </View>
          <View className='mt-5 items-center'>
           <TouchableOpacity className='bg-[#AFFC41] w-[10.6rem] h-14 rounded-full items-center justify-center'
          onPress={updatethings}
           >
             <Text className='text-[#02182B] font-syne-bold text-[13px]'>Save changes</Text>
           </TouchableOpacity>
         </View>
    </View>
   </ScrollView>
  );
};

export default Editprofile;

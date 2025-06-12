
 import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { useNavigation } from 'expo-router';
import ToggleIcon from '@/assets/svg/SvgComponent';
 import CustomDrawer from '@/components/customDrawer';
  const Togglebutton=()=>{
    const nav=useNavigation();
    return (
      <TouchableOpacity onPress={()=>(nav as any).openDrawer()}
      style={{marginLeft:25,marginTop:27}}
      >
   <ToggleIcon
        width={40}
        height={40}
        color="#02182B"
      
      />

      </TouchableOpacity>
    )

  }
const _layout = () => {
 
  return (
      <Drawer
      drawerContent={(prop:any)=><CustomDrawer {...prop}/>}
      
      screenOptions={
        {
          headerTitle:'',
          headerTransparent:true,
        headerLeft:()=><Togglebutton/>,
        drawerStyle:{
          width:250
        }
        
        }
      }
      />
  )
}

export default _layout
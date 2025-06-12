import { View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@/assets/svg/CloseSvg';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';

const CustomDrawer = (props: any) => {
  const { navigation } = props;
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setSelected(pathname); // update selected path on pathname change
  }, [pathname]);

  const handle = (path: string) => {
    setSelected(path);
    router.push(path);
    navigation.closeDrawer();
  };

  const getStyles = (path: string) => ({
    container: path === selected ? 'bg-[#AFFC41]' : 'bg-[#02182B]',
    iconColor: path === selected ? 'black' : 'white',
    labelColor: path === selected ? 'black' : 'white',
  });

  return (
    <View className="flex-1 bg-[#02182B]">
      <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()} className="mt-[26px] ml-[16px]">
          <CloseIcon color="#fff" width={40} height={40} />
        </TouchableOpacity>

        <View className="absolute left-0 top-[11rem] w-[16rem] gap-5">
          {[
            { label: 'Home', icon: 'home', path: '/home' },
            { label: 'About Devs', icon: 'people', path: '/aboutdev' },
            { label: 'Contact Us', icon: 'mail', path: '/contactus' },
          ].map(({ label, icon, path }) => {
            const styles = getStyles(path);
            return (
              <View key={path} className={styles.container}>
                <DrawerItem
                  onPress={() => handle(path)}
                  label={label}
                  labelStyle={{
                    fontFamily: 'Syne_500Medium',
                    fontSize: 20,
                    color: styles.labelColor,
                  }}
                  icon={() => <Ionicons name={icon as any} size={30} color={styles.iconColor} />}
                />
              </View>
            );
          })}
        </View>
      </DrawerContentScrollView>

      <View className="p-4 mb-24 ml-[-1rem]">
        <DrawerItem
          onPress={() => handle('/logout')}
          label="Logout"
          labelStyle={{
            fontFamily: 'Syne_500Medium',
            fontSize: 18,
            color: 'white',
          }}
          icon={() => <Ionicons name="log-out-outline" size={40} color="#AFFC41" />}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;

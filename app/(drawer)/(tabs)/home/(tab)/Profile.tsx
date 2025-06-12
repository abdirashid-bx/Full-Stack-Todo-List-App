import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Editprofile from '@/components/Editprofile';
import { supabase } from '@/lip/susbaseClient';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = () => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const handleprofile = async () => {
      const user = supabase.auth.user();
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user?.id)
          .single();

        setuser({
          avatar: data.avatar_url,
          userid: user.id,
          useremail: user.email,
          fullName: data.full_name,
          phone: data.phone,
          sex: data.sex,
          faculty: data.Faculty,
          samester: data.Samester,
          dep: data.department,
        });
      }
    };

    handleprofile();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#E8EBF5]">
      {user ? (
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}  
          showsVerticalScrollIndicator={false}
        >
          <Editprofile user={user} />
        </ScrollView>
      ) : (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={40} color={'black'} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;

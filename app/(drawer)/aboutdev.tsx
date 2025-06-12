import { View, Text, ScrollView } from 'react-native';
import React from 'react';

const AboutDev = () => {
  return (
    <ScrollView className="flex-1 bg-[#fff]">
      {/* Heading Section */}
      <View className="mt-10 px-6">
        <Text className="text-start text-[#000000] font-syne-bold text-xl ">
          About The Developers
        </Text>
        <Text className="text-[#000000] font-syne text-[16px]">
          Meet the minds behind this app
        </Text>
      </View>

      {/* Info Boxes Section */}
      <View className="flex flex-col mt-10 space-y-6 px-6 w-[27.5rem] gap-10 items-center justify-center">
        {/* Box 1 */}
        <View className="bg-[#02182B] rounded-xl p-4">
          <View className="flex flex-row items-start space-x-2">
            <View className="w-1 h-5 bg-[#00FF66] rounded-full mt-1" />
            <Text className="text-white font-syne-bold text-[16px] ml-2">Who Built This App?</Text>
          </View>
          <Text className="font-syne text-[15px] text-white mt-2">
            We’re a group of university students passionate about using technology to solve everyday challenges.
            This app was built with students in mind — by students, for students.
          </Text>
        </View>

        {/* Box 2 */}
        <View className="bg-[#02182B] rounded-xl p-4">
          <View className="flex flex-row items-start space-x-2">
            <View className="w-1 h-5 bg-[#00FF66] rounded-full mt-1" />
            <Text className="text-white font-syne-bold text-[16px]  ml-2">Our Mission</Text>
          </View>
          <Text className="font-syne text-[15px] text-white mt-2">
            To empower students with a simple, distraction-free to-do list app that helps them stay focused,
            organized, and in control of their academic responsibilities. We believe that productivity tools should
            be helpful, not stressful — and that’s exactly what we aimed to build.
          </Text>
        </View>

        {/* Box 3 */}
        <View className="bg-[#02182B] rounded-xl p-4">
          <View className="flex flex-row items-start space-x-2">
            <View className="w-1 h-5 bg-[#00FF66] rounded-full " />
            <Text className="text-white font-syne-bold text-[16px]  ml-2">Our Vision</Text>
          </View>
          <Text className="font-syne text-[15px] text-white mt-2">
            To create smart, student-friendly tools that improve everyday campus life — starting with task
            management, and growing into a full academic productivity platform. We envision a future where every
            student has access to intuitive tech that supports their learning journey.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutDev;

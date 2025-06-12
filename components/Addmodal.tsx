import { View, Text, Modal, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

const Addmodal = ({ ismodel, setmodel, onadd }: any) => {
  const [task, settask] = useState('');
  const [subject, setsubject] = useState('');
  const [description, setdescription] = useState('');
  const [deadline, setdeadline] = useState('');

  const handleonadd = () => {
    if (task.trim()) {
      onadd(task, subject, description, deadline);
      // settask('');
      // setsubject('');
      // setdescription('');
      // setdeadline('');
      // setmodel();
    }
  };

  return (
    <Modal animationType="slide" visible={ismodel} transparent={true}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }} 
          className="w-full px-4 py-10"
          keyboardShouldPersistTaps="handled"
        >
          <View className="bg-[#02182B] w-full max-w-[360px] rounded-3xl mx-auto py-6 px-4">
            <View className="items-center mb-6">
              <Text className="text-[#AFFC41] font-syne-medium text-2xl">Create Task</Text>
            </View>

            <View className="gap-4">
              <TextInput
                onChangeText={settask}
                value={task}
                placeholder="Name"
                placeholderTextColor="#02182B"
                className="bg-[#AFFC41] w-full h-14 rounded-[10px] text-[16px] font-syne-medium px-4"
              />
              <TextInput
                onChangeText={setsubject}
                value={subject}
                placeholder="Subject"
                placeholderTextColor="#02182B"
                className="bg-[#AFFC41] w-full h-14 rounded-[10px] text-[16px] font-syne-medium px-4"
              />
              <TextInput
                onChangeText={setdeadline}
                value={deadline}
                placeholder="Deadline"
                placeholderTextColor="#02182B"
                className="bg-[#AFFC41] w-full h-14 rounded-[10px] text-[16px] font-syne-medium px-4"
              />
              <TextInput
                onChangeText={setdescription}
                value={description}
                placeholder="Description"
                placeholderTextColor="#02182B"
                multiline
                numberOfLines={4}
                className="bg-[#AFFC41] w-full h-32 rounded-[10px] text-[16px] font-syne-medium px-4 pt-2"
              />
            </View>

            <View className="flex-row justify-center gap-4 mt-6">
              <TouchableOpacity
                className="bg-white w-32 h-12 justify-center rounded-[30px]"
                onPress={setmodel}
              >
                <Text className="text-[#02182B] font-syne-medium text-[16px] text-center">
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-[#AFFC41] w-32 h-12 justify-center rounded-[30px]"
                onPress={handleonadd}
              >
                <Text className="text-[#02182B] font-syne-medium text-[16px] text-center">
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default Addmodal;

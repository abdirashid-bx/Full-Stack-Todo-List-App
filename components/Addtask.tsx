import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Tasklist from './Tasklist';
import Addmodal from './Addmodal';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';

type Task = {
  taskid: number;
  tasktitle: string;
  subject: string;
  completed: boolean;
  description: string;
  created: string;
  deadline: string;
};

const Addtask = ({ showcompleted = false, showsubject = false }: any) => {
  const [task, setTask] = useState<Task[]>([]);
  const [ismodel, setismodel] = useState(false);
  const ref = useRef(0);

  const handeletask = (
    title: string,
    subject: string,
    description: string,
    usedeadline: string
  ) => {
    const tasks: Task = {
      taskid: ++ref.current,
      description: description,
      tasktitle: title,
      subject: subject,
      completed: false,
      created: new Date().toLocaleString(),
      deadline: usedeadline,
    };
    localstorage([tasks, ...task]);
  };

  const handleDelete = (taskId: number) => {
    const updateTask = task.filter((t) => t.taskid !== taskId);
    localstorage(updateTask);
  };

  const handleCompoleted = (taskId: number) => {
    const update = task.map((t) =>
      t.taskid === taskId ? { ...t, completed: !t.completed } : t
    );
    localstorage(update);
  };

  const localstorage = async (newTask: any) => {
    try {
      await AsyncStorage.setItem('task', JSON.stringify(newTask));
      setTask(newTask);
    } catch (error) {
      console.log(error);
    }
  };

  const load = async () => {
    try {
      const stored = await AsyncStorage.getItem('task');
      if (stored) {
        setTask(JSON.parse(stored));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      load();
    }, [])
  );

  useEffect(() => {
    load();
  }, []);

  const filteredTasks = task.filter((t) => t.completed === showcompleted);
 
 const grouped: Record<string, { count: number, originalSubject: string }> = {};

filteredTasks.forEach((t) => {
  const key = t.subject.toLowerCase(); // normalize to lowercase
  if (!grouped[key]) {
    grouped[key] = { count: 0, originalSubject: t.subject };
  }
  grouped[key].count++;
});

const subjectGroups = Object.keys(grouped).map((key) => {
  return {
    subject: grouped[key].originalSubject,  
    taskCount: grouped[key].count
  };
});


  return (
    <View className="flex-1">
      <FlatList
        data={showsubject ? subjectGroups : filteredTasks}
        keyExtractor={(item: any, index) =>
          showsubject ? item.subject : item.taskid
        }
        renderItem={({ item }) =>
          showsubject ? (
            <View className='flex justify-center items-center'>
            <View className="flex-row bg-[#02182B] p-4 mx-2 my-1 rounded-xl w-[23rem] h-[6rem] ml-4 mb-5 items-center justify-between flex">
              <Text className="text-xl text-white font-syne-bold">{item.subject}</Text>
              <View className="items-end">
                <Text className="text-[#AFFC41] text-2xl font-syne-bold mr-3">{item.taskCount}</Text>
                <Text className="text-[#D9D9D9]  font-syne-medium">Tasks</Text>
              </View>
            </View>
            </View>
          ) : (
            <Tasklist
              task={item}
              ondelete={handleDelete}
              onCompleted={handleCompoleted}
              showsubject={showsubject}
            />
          )
        }
        ListEmptyComponent={
          <Text className="mt-40 text-xl text-center font-syne-boldbold color-gray-500">
            {!showcompleted ? 'No active Tasks here' : 'There are no completed tasks here'}
          </Text>
        }
      />

      {!showcompleted && !showsubject ? (
        <TouchableOpacity
          onPress={() => {
            setismodel(true);
          }}
          style={{
            height: 70,
            position: 'absolute',
            right: 20,
            bottom: 30,
            width: 70,
            borderRadius: 50,
            backgroundColor: '#AFFC41',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesome name="plus" size={30} color="#02182B" />
        </TouchableOpacity>
      ) : null}

      <Addmodal ismodel={ismodel} setmodel={() => setismodel(false)} onadd={handeletask} />
    </View>
  );
};

export default Addtask;

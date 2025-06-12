import { useState } from "react";
import { View } from "react-native";
import { AppScreens, DUMMY_DATA } from "../utils/constants.js";

import AddTaskScreen from "../screens/AddTaskScreen.jsx";
import HomeScreen from "../screens/HomeScreen.jsx";

export default function AppManager() {
  const [currentScreen, setCurrentScreen] = useState(AppScreens.HomeScreen);
  const [tasks, setTasks] = useState([...DUMMY_DATA]);
  const handleTaskComplete = (id) => {
    alert(id);

    const taskIndex = tasks.findIndex((task) => task.id == id);

    const newList = [...tasks];

    newList[taskIndex] = {
      ...newList[taskIndex],
      isCompleted: true,
    };

    setTasks(newList);
  };
  const handleTaskDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  
  const handleAddNewTask = (newTask) => {
    setTasks((prev) => [...prev, { ...newTask }]);
    setCurrentScreen(AppScreens.HomeScreen);
  };

  return (
    <View>
      {currentScreen === AppScreens.AddTaskScreen ? (
        <AddTaskScreen
          onAddNewTask={handleAddNewTask}
          changeScreen={(screenName) => setCurrentScreen(screenName)}
        />
      ) : (
        <HomeScreen
          tasks={tasks}
          onTaskDelete={handleTaskDelete}
          onTaskComplete={handleTaskComplete}
          changeScreen={(screenName) => setCurrentScreen(screenName)}
        />
      )}
    </View>
  );
}

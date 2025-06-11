import { useState } from "react";
import { View } from "react-native";
import { AppScreens, DUMMY_DATA } from "../utils/constants.js";

import AddTaskScreen from "../screens/AddTaskScreen.jsx";
import HomeScreen from "../screens/HomeScreen.jsx";

export default function AppManager() {
  const [currentScreen, setCurrentScreen] = useState(AppScreens.HomeScreen);
  const [tasks, setTasks] = useState([...DUMMY_DATA]);
  const handleTaskComplete = () => {alert("Hi")};
  const handleTaskDelete = () => {alert("Horirkiir");};

  return (
    <View>
      {currentScreen === AppScreens.AddTaskScreen ? (
        <AddTaskScreen />
      ) : (
        <HomeScreen
          tasks={tasks}
          onTaskDelete={handleTaskDelete}
          onTaskComplete={handleTaskComplete}
        />
      )}
    </View>
  );
}

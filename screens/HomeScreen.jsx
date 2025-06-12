import { AppScreens } from "@/utils/constants";
import { FlatList, View } from "react-native";
import { Chip } from "react-native-paper";
import TaskItem from "../components/TaskItem";

export default function HomeScreen({
  tasks,
  onTaskComplete,
  onTaskDelete,
  changeScreen,
}) {
  //   console.log(tasks);

  return (
    <View>
      <Chip
        onPress={() => changeScreen(AppScreens.AddTaskScreen)}
        icon={"plus"}
        textStyle={{ fontSize: 16 }}
        style={{ padding: 4, marginTop: 15, marginHorizontal: 10 }}
      >
        Add New Task
      </Chip>
      <FlatList
        style={{ marginVertical: 10 }}
        contentContainerStyle={{paddingBottom:109}}
        data={tasks}
        keyExtractor={(item, index) => item.title + index}
        renderItem={(iter) => (
          <TaskItem
            date={iter.item.date}
            title={iter.item.title}
            description={iter.item.description}
            id={iter.item.id}
            isCompleted={iter.item.isCompleted}
            onComplete={(id) => onTaskComplete(id)}
            onDelete={() => onTaskDelete(iter.item.id)}
          />
        )}
      />
    </View>
  );
}

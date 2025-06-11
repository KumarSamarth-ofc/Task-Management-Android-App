import { FlatList, Text, View } from "react-native";
import TaskItem from "../components/TaskItem";

export default function HomeScreen({ tasks,onTaskComplete, onTaskDelete }) {
  //   console.log(tasks);

  return (
    <View>
      <Text> HomeScreen </Text>
      <FlatList
        style={{ marginVertical: 40 }}
        data={tasks}
        keyExtractor={(item, index) => item.title + index}
        renderItem={(iter) => (
          <TaskItem
            date={iter.item.date}
            title={iter.item.title}
            description={iter.item.description}
            id={iter.item.id}
            isCompleted={iter.item.isCompleted}
            onComplete={() => onTaskComplete()}
            onDelete={() => onTaskDelete()}
          />
        )}
      />
    </View>
  );
}

import { AppScreens } from "@/utils/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Appbar, Button, Chip, TextInput } from "react-native-paper";

export default function AddTaskScreen({ onAddNewTask, changeScreen }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (
      !title ||
      title.trim() === "" ||
      !description ||
      description.trim() === ""
    ) {
      return Alert.alert(
        "Invalid format of Value",
        "You need to fill title and description both"
      );
    }

    const newTask = {
      title,
      description,
      date: new Date().toLocaleString(),
      isCompleted: false,
      id: Date.now(),
    };

    onAddNewTask(newTask);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={()=>{changeScreen(AppScreens.HomeScreen)}} color="black"/>
        <Appbar.Content title="Add New Task" titleStyle={styles.appbarTitle} />
      </Appbar.Header>

      {/* <Chip
        textStyle={{ textAlign: "center", color: "black", fontSize: 18 }}
        icon={({ size }) => (
          <MaterialCommunityIcons
            name="application-edit-outline"
            color="black"
            size={size}
          />
        )}
        mode="outlined"
        style={styles.heading}
      >
        Add New Task
      </Chip> */}

      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
        label={"Title"}
        mode="outlined"
        placeholder="Enter Title"
      />

      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
        numberOfLines={12}
        style={styles.input}
        label={"Enter Description"}
        mode="outlined"
        placeholder="Enter Description"
      />

      <Button mode="contained" onPress={handleSubmit}>
        Save Task
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  appbar: {
    backgroundColor: "white",
    elevation: 2,
    marginTop: 0,
    paddingTop: 0,
    minHeight: 2, 
  },
  appbarTitle: {
    color: "black",
    fontSize: 18,
  },
  input: {
    marginVertical: 10,
    backgroundColor: "white",
  },
  heading: {
    padding: 12,
    backgroundColor: "#CBC3E3",
    marginVertical: 10,
  },
});

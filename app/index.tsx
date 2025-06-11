import { Text, View } from "react-native";
import AppManager from '../manager/AppManager'
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

export default function Index() {
  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 4,
        }}
      >
        <StatusBar />

        <AppManager />
      </View>
    </PaperProvider>
  );
}

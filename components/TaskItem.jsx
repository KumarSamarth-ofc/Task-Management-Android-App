import { StyleSheet } from "react-native";
import { Button, Card, Chip, Text } from "react-native-paper";

export default function TaskItem({
  title,
  description,
  date,
  id,
  isCompleted,
  onComplete,
  onDelete,
}) {
  return (
    <Card elevation={5} style={styles.card}>
      {isCompleted && (
        <Chip
          icon={"calendar-multiple-check"}
          style={{
            marginLeft: "auto",
            backgroundColor: "#fff",
          }}
          textStyle={{ color: "#000" }}
          mode="outlined"
        >
          Task Done
        </Chip>
      )}
      <Card.Title
        title={title}
        titleStyle={{ color: "black", fontWeight: "bold", fontSize: 20 }}
      />
      <Card.Content>
        <Text variant="bodyMedium" style={{ color: "black" }}>
          {description}
        </Text>
        <Text variant="labelSmall" style={styles.date}>
          {date}
        </Text>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button
          onPress={() => onDelete()}
          mode="outlined"
          textColor="black"
          style={styles.button}
        >
          Delete
        </Button>
        <Button
          onPress={() => onComplete(id)}
          mode="contained"
          style={styles.button}
        >
          Complete
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: "#fff",
    textColor: "black",
  },
  date: {
    marginTop: 4,
    color: "#666",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 1,
  },
});

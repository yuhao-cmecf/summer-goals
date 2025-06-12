import { Text, View, StyleSheet, TextInput, Button, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log("buton pressed " + enteredGoalText);
    setGoals((pre) => [...pre, { text: enteredGoalText, id: Math.random().toString() }]);
    setEnteredGoalText(""); // Clear the input field after adding the goal
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <GoalInput goalInputHandler={goalInputHandler} enteredGoalText={enteredGoalText} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          <Text>List of 2025 Summer Goals</Text>
          {goals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>
                {index + 1}. {goal}
              </Text>
            </View>
          ))}
        </ScrollView> */}
        <Text>List of 2025 Summer Goals</Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalItem itemData={itemData} />}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalsContainer: {
    flex: 5,
  },
});

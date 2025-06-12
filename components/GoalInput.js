import { StyleSheet, TextInput } from "react-native";

function GoalInput({ goalInputHandler, enteredGoalText }) {
  return (
    <TextInput
      placeholder='Your summer 2025 goal'
      style={styles.textInput}
      value={enteredGoalText}
      onChangeText={goalInputHandler}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: "8",
    padding: "8",
  },
});

export default GoalInput;

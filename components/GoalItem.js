import { Text, View, StyleSheet } from "react-native";

function GoalItem({ itemData }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>
        {itemData.index + 1}. {itemData.item.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderWidth: 1,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;

import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalItem({ itemData, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      {/* <Pressable onPress={() => onDeleteItem(itemData.item.id)} > */}
      <Pressable
        onPress={onDeleteItem.bind(this, itemData.item.id)}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>
          {itemData.index + 1}. {itemData.item.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderWidth: 1,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;

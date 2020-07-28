import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

const ListScreen = () => {
  const names = Array(60)
    .fill()
    .map((_, index) => ({
      name: `Friend ${index}`,
    }));
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={names}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <Text style={styles.text}>My name is {item.name}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
  },
});

export default ListScreen;

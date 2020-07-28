import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Components Screen</Text>
      <Text>Hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderColor: "red",
    borderWidth: 2,
  },
  text: {
    fontSize: 16,
    margin: 10,
    padding: 20,
    borderColor: "blue",
    borderWidth: 2,
  },
});

export default ComponentsScreen;

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Components demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color demo"
        onPress={() => navigation.navigate("Color")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

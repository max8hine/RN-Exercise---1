import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
} from "react-native";

const randomColour = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
  const [colours, setColours] = useState([]);
  const addAColour = () => {
    setColours(colours.concat(randomColour()));
  };
  return (
    <View>
      <Text>Colour Generator</Text>
      <Button title="Add a colour" onPress={addAColour} />
      <FlatList
        data={colours}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          const styleBox = { height: 100, width: 100, backgroundColor: item };
          return <View style={styleBox}></View>;
        }}
      ></FlatList>
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({});

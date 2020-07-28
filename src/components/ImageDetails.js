import React from "react";
import { View, Button, Text, Image, StyleSheet } from "react-native";

import beach from "../../assets/beach.jpg";

const ImageScreen = ({
  title = "Image Screen",
  imageSource = beach,
  score = 0,
}) => {
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;

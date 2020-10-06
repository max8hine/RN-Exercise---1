import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
	const [name, setName] = useState('');
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        onKeyPress={({ nativeEvent }) => {
          console.log(nativeEvent.key);
				}}
      />
      <Text>User Name: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
		padding: 15,
    margin: 15,
    borderColor: "grey",
    borderWidth: 1,
  },
});

export default TextScreen;

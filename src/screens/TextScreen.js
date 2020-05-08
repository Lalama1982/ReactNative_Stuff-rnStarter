import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
// INFO: Styling is mandatory o.w. whole screen becomes

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Type Something in below Text Box: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        //value="Default Text Input: Value"
        value={name} // INFO: Without "onChangeText", controller will not allowed to show any typed letters; as it rewrites the default {name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length > 6 ? <Text>Length should be less than 6</Text> : null}
      <Text>Typed in Input Text Box is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;

import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          //colors.push()
          setColors([...colors, randomRgb()]);
          // everytime the button is pressed; colours randomly added to array "colors"(items in the array increases)
          // because of the use of "useState", even view component below get refreshed
        }}
      />
      {/* [Instead of this code; below flatlist will generate list items] <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />*/}

      {/* "item" is preceived to represent each component in "colors"
          "item" is used as the key-index for the flatlist */}
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});
export default ColorScreen;

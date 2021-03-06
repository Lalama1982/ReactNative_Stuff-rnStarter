import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  /*const HomeScreen = (props) => {
  {navigation} is an object belongs to "props"
  It is unnecessary bring the whole props object hence only the navigation
*/

  //console.log(props.navigation);
  //console.log(props);

  // No semi-colons inside, view items
  return (
    <View>
      <Text style={styles.text}>HomeScreen-Mobile 1st</Text>
      <Button
        //onPress={() => console.log("Button Pressed")}
        onPress={() => {
          console.log("Button Pressed > Navigating to Components Screen");
          //Since only "navigation" part is used; this is commented. [props.navigation.navigate("Components");]
          navigation.navigate("Components"); // here it refers to the "Components" screen specified at "App.js"
        }}
        title="Go to Components"
      />
      <Button
        onPress={() => {
          console.log("Button Pressed > Navigating to List Screen");
          navigation.navigate("List"); // here it refers to the "List" screen specified at "App.js"
        }}
        title="Go to List[Btn]"
      />
      <TouchableOpacity
        onPress={() => {
          console.log("Touchable Opacity Pressed > Navigating to List Screen");
          navigation.navigate("List"); // here it refers to the "List" screen specified at "App.js"
        }}
      >
        <Text>Go to List Demo[TchOpa]</Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          console.log("Button Pressed > Navigating to Image Screen");
          navigation.navigate("ImageScreen"); // here it refers to the "ImageScreen" screen specified at "App.js"
        }}
        title="Go to ImageScreen[Btn]"
      />
      <Button
        onPress={() => {
          console.log("Button Pressed > Navigating to Counter Screen");
          navigation.navigate("Counter"); // here it refers to the "ImageScreen" screen specified at "App.js"
        }}
        title="Go to CounterScreen[Btn]"
      />
      <Button
        onPress={() => {
          console.log(
            "Button Pressed > Navigating to Counter Screen with Reducer"
          );
          navigation.navigate("CounterReducer"); // here it refers to the "ImageScreen" screen specified at "App.js"
        }}
        title="Go to CounterScreen with Reducer[Btn]"
      />
      <Button
        onPress={() => {
          console.log("Button Pressed > Navigating to Color Screen");
          navigation.navigate("Color"); // here it refers to the "ImageScreen" screen specified at "App.js"
        }}
        title="Go to ColorScreen[Btn]"
      />
      <Button
        onPress={() => {
          console.log("Button Pressed > Navigating to Square Screen");
          navigation.navigate("Square"); // here it refers to the "ImageScreen" screen specified at "App.js"
        }}
        title="Go to SquareScreen[Btn]"
      />
      <Button
        onPress={() => {
          console.log(
            "Button Pressed > Navigating to Square Screen using Reducer"
          );
          navigation.navigate("SquareReducer");
        }}
        title="Go to SquareScreen with Reducer[Btn]"
      />
      <Button
        onPress={() => {
          console.log("Button Pressed > Navigating to Text Screen");
          navigation.navigate("Text");
        }}
        title="Go to TextScreen[Btn]"
      />
      <Button
        onPress={() => {
          console.log("Button Pressed > Navigating to Box Screen");
          navigation.navigate("Box");
        }}
        title="Go to BoxScreen[Btn]"
      />
      <Button
        onPress={() => {
          console.log("Button Pressed > Navigating to Layout Screen");
          navigation.navigate("Layout");
        }}
        title="Go to LayoutScreen[Btn]"
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

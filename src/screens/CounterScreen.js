import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  /*INFO: just using a simple variable, will not reflect in "Current Count:". Needs a listener to listen change of values
        Hence the use of "useState" 
    let counter = 0;*/

  const [counter, setCounter] = useState(0); 
  // "0" is the default value
  // "setCounter" is a function

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //counter++; // Main variable is not modified
          setCounter(counter+1); // this will render whole "js" file evertime it's called.
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //counter--; // Main variable is not modified
          setCounter(counter-1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;

import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const VALUE_INCREMENT = 10;

const reducer = (state, action) => {
  // state == { counter: number }
  // action == { type: 'Increase' or 'Decrease' or 'change_blue', payload: VALUE_INCREMENT}
  switch (action.type) {
    case "Increase":
      return { ...state, counter: state.counter + action.payload };
    case "Decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "Increase", payload: VALUE_INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "Decrease", payload: VALUE_INCREMENT });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreenReducer;

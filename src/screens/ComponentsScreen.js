// Part 1: Import libraries we need to create a component
import React from "react"; // importing entire library
import { Text, StyleSheet, View } from "react-native"; // importing parts of the library

// Part 2: Create a component - a function that returns some "JSX"
const ComponentsScreen = function() {
  const var01 = "Variable_Value";
  const varArr = ['abc', 'xyz', 'pqr'];

  // 1) Using BABEL at engine, below is converted to function call in "js" (babeljs.io)
  // 2) It will be like;
  /*      React.createElement(text, {
                style: styles.textStyle
            }, "This is ComponentsScreen"); */
  return (
    <View>
      <Text style={styles.textStyle}>This is ComponentsScreen as Home</Text>
      <Text>component-2</Text>
      <Text>{var01}</Text>
      <Text style={styles.subHeaderStyle}>{varArr}</Text>
    </View>
  );
  //return <Text style={{fontSize: 25}}>This is ComponentsScreen</Text>; // inline-style; any error (i.e. wrong spelling), a warning is shown
};

// Part 3: Create a style sheet to style our component; this is optional
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25
  },
  subHeaderStyle:{
      fontSize: 20
  }
});

// Part 4: Export the component so we can use it elsewhere in our project
// a) "ComponentsScreen" is imported at "App.js"
export default ComponentsScreen;

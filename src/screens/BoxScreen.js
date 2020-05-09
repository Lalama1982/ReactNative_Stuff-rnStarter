import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// This is related to "Layout Formatting"

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.childOneStyle}>Child#1</Text>
      <Text style={styles.childTwoStyle}>Child#2</Text>
      <Text style={styles.childThreeStyle}>Child#3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    parentStyle: {
        //<Parent>
        borderWidth: 3,
        borderColor: 'black',
        //alignItems: 'flex-start' // centre; flex-end
        //flexDirection: 'row', //'column'
        height: 100
        //alignItems: 'center'
        //justifyContent: 'space-around'
        //margin: 10
    },
    childOneStyle: {
        //<Child1>
        borderWidth: 1,
        borderColor: 'red'
        //justifyContent: 'center',
        //flex: 4 // morelike; proportionate take-up in the view
        //margin: 20
        //marginVertical: 20,
        //marginHorizontal: 20
    },
    childTwoStyle: {
        //<Child2>
        borderWidth: 1,
        borderColor: 'red',
        //flex: 6,
        //alignSelf: 'flex-end' // overrides "alignItems" at the parent
        //margin: 20
        //marginVertical: 20,
        //marginHorizontal: 20
        //position: 'absolute', // 'absolute' ignores the rest of siblings. 'relative' is by default; obeys parents' settings
        //left: 0,
        //right: 0,
        //top: 0,
        //bottom: 0,
        ...StyleSheet.absoluteFillObject // this itself similar to below 5 settings        
    },
    childThreeStyle: {
        //<Child3>
        borderWidth: 1,
        borderColor: 'red',
        //flex: 3, // morelike; proportionate take-up in the view
        alignSelf: 'stretch' // overrides "alignItems" at the parent
        //margin: 20
        //marginVertical: 20,
        //marginHorizontal: 20
    }    
});

export default BoxScreen;

import React from "react";
import { View, StyleSheet } from "react-native";

const LayoutScreen = () => {
  return (
    <View style={styles.viewParentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
    viewParentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 156,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        borderWidth: 1,
        //borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        borderWidth: 1,
        //borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'green' ,
        //marginTop: 50
        alignSelf: 'flex-end'

    },
    viewThreeStyle: {
        borderWidth: 1,
        //borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'blue'        
    }    
});

export default LayoutScreen;

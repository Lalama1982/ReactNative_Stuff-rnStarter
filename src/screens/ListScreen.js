import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {  

    const friends = [
        { name: "Friend #1", age: "18" },
        { name: "Friend #2", age: "28" },
        { name: "Friend #3", age: "38" },
        { name: "Friend #4", age: "48" },
        { name: "Friend #5", age: "58" },
        { name: "Friend #6", age: "68" },
        { name: "Friend #7", age: "78" },
        { name: "Friend #8", age: "88" },
        { name: "Friend #9", age: "98" },
    ];

    /* with the "key"
    const friends = [
        { name: "Friend #1", '1' },
        { name: "Friend #2", '2' },
        { name: "Friend #3", '3' }
    ];*/

    return (
        <FlatList 
            //horizontal // this will display list horizontally
            showsHorizontalScrollIndicator = {false}
            keyExtractor={friend => friend.name} // If keys are set at array, from this code it get overriden.
            data={friends} 
            // Composition of "element" => {item: {name: "Friend #1"},{age: "18"}, index:0}
            // ... hence use of "item" below
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }} 
        />
    );

};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50 //  this is to add vertical height to the list, to scroll
    }

});

export default ListScreen;

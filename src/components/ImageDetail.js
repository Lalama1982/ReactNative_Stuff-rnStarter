import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// const ImageDetail = ({imageSource, title, score}) => {  :: also could be used
const ImageDetail = (props) => {
  // from "ImageScreen.js", "title" attribute is set and added to the prop.
  // For hard-coded calling, <Image source={require('../../assets/beach.jpg')} />
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image Score - {props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;

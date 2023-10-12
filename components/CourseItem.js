import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";

const CourseItem = (props) => {
  return (
    <View style={styles.courseContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.courseContainerDetails}>
        <Text style={styles.courseTitle}> {props.title} </Text>
        <Text style={styles.coursePrice}> {props.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default CourseItem;

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.while,
    borderRadius: 10,
    height: 300,
    margin: 25,
    borderColor: globalStyles.lightGrey,
    borderWidth: 1,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  courseContainerDetails: {
    alignItems: "center",
    height: "20%",
    padding: 10,
  },
  courseTitle: {
    fontSize: 18,
    marginVertical: 4,
    color: globalStyles.green,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  coursePrice: {
    color: globalStyles.darkGrey,
    fontSize: 16,
  },
});

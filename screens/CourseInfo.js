import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CourseInfo = ({ route }) => {
  const courseId = route.params.courseId;
  console.log(courseId);
  return (
    <View>
      <Text>{CourseInfo}</Text>
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({});
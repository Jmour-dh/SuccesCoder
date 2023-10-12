import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing";
import Cart from "../screens/Cart";
import CourseInfo from "../screens/CourseInfo";

const CoursesStackNavigator = createStackNavigator();

export const CoursesNavigator = () => {
  return (
    <CoursesStackNavigator.Navigator>
      <CoursesStackNavigator.Screen name="Landing" component={Landing} />
      <CoursesStackNavigator.Screen name="Details" component={CourseInfo} />
      <CoursesStackNavigator.Screen name="Cart" component={Cart} />
    </CoursesStackNavigator.Navigator>
  );
};

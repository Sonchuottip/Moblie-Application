import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import MainScreen from "./mainScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // ẩn header nếu muốn
        />
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{ title: "Home" }} // tùy chọn header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
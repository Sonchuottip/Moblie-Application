import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthProvider, AuthContext } from "./src/context/AuthContext";
import SignInScreen from "./src/screen/SignInScreen";
import ExplorerScreen from "./src/screen/ExplorerScreen";
import AccountScreen from "./src/screen/AccountScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Explorer" 
      component={ExplorerScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="compass-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Account" 
      component={AccountScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-outline" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);


const AppNavigator = () => {
  const { user } = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? <Stack.Screen name="Main" component={MainTabs} /> : <Stack.Screen name="SignIn" component={SignInScreen} />}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
      <AuthProvider>
          <NavigationContainer>
              <AppNavigator />
          </NavigationContainer>
      </AuthProvider>
  );
}

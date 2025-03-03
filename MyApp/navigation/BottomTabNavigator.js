import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator(); // Khởi tạo Bottom Tab Navigator

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === 'Home' ? 'home' : 'scan'; // Icon khác nhau cho từng màn hình
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false, // Ẩn tên của tab
        tabBarStyle: { height: 70, backgroundColor: 'white' }, // Tuỳ chỉnh thanh điều hướng
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

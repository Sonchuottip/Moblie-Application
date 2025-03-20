import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon

// Import các màn hình
import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import HistoryScreen from './screens/HistoryScreen';
import CartScreen from './screens/CartScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Scan') {
              iconName = 'scan-outline';
            } else if (route.name === 'Notifications') {
              iconName = 'notifications-outline';
            } else if (route.name === 'History') {
              iconName = 'time-outline';
            } else if (route.name === 'Cart') {
              iconName = 'cart-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false, // Ẩn tên tab để icon rõ ràng hơn
          tabBarStyle: {
            height: 50, // Tăng chiều cao để căn giữa icon
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            paddingBottom: 5, // Đẩy icon lên trên một chút
          },
          tabBarItemStyle: {
            justifyContent: 'center', // Căn giữa icon theo chiều dọc
            alignItems: 'center',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} options={{ tabBarStyle: { display: 'none' } }} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

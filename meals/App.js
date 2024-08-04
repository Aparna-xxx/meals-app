import React from 'react';
import CategoryScreen from './screens/CategoryScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import Colors from './utils/Colors';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator(); 
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MealsCategory"
      screenOptions={{
        headerShown: false, // Hide the header for the stack navigator
        contentStyle: { backgroundColor: Colors.WhiteBlue100 },
      }}
    >
      <Stack.Screen name="MealsCategory" component={CategoryScreen} />
      <Stack.Screen name="MealDescription" component={MealsDetailsScreen} />
      <Stack.Screen name="CartStack" component={CartScreen} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: Colors.White700,
        sceneContainerStyle: { backgroundColor: Colors.WhiteBlue100 },
        drawerContentStyle: { backgroundColor: 'black' },
        drawerInactiveTintColor: Colors.White700,
        drawerActiveTintColor: Colors.WhiteBlue400,
      }}
    >
      <Drawer.Screen
        name="PSG FoodZone"
        component={StackNavigator}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name='cart' color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
}




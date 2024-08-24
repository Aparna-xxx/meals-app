import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoryScreen from './screens/CategoryScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import OrderSummaryScreen from './screens/OrderSummaryScreen';
import PSGWalletScreen from './screens/PSGWalletScreen';
import CartScreen from './screens/CartScreen';
import Colors from './utils/Colors';
import { CartProvider } from './context/CartContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MealsCategory"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.WhiteBlue100 },
      }}
    >
      <Stack.Screen name="MealsCategory" component={CategoryScreen} />
      <Stack.Screen name="MealDescription" component={MealsDetailsScreen} />
      <Stack.Screen name="CartStack" component={CartScreen} />
      <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} />
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
       <Drawer.Screen
        name="PSG Wallet"
        component={PSGWalletScreen} 
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name='wallet' color={color} size={size} />, // Choose an appropriate icon
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <CartProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </CartProvider>
    </>
  );
}

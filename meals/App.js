import CategoryScreen from './screens/CategoryScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import Colors from './utils/Colors';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator(); 
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{
    
    headerStyle: { backgroundColor: Colors.DarkBlue100 },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: Colors.WhiteBlue100 },
    drawerContentStyle:{backgroundColor:'brown'},
    drawerInactiveTintColor:'white',
    drawerActiveTintColor: Colors.DarkBlue100,
  }}>
    <Drawer.Screen name="Categories" component={CategoryScreen} options={{drawerIcon:({color,size})=><Ionicons name='list' color={color} size={size}/>}}/>
    <Drawer.Screen name="Cart" component={CartScreen} options={{drawerIcon:({color,size})=><Ionicons name='cart' color={color} size={size}/>}}/>
  </Drawer.Navigator>
} 

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategory"
          screenOptions={{
            title: 'Meal Groups',
            headerStyle: { backgroundColor: Colors.DarkBlue100 },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: Colors.WhiteBlue100 },
          }}
        >
          <Stack.Screen name="MealsCategory" component={DrawerNavigator} options={{headerShown:false}}/>
          <Stack.Screen name="MealDescription" component={MealsDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}



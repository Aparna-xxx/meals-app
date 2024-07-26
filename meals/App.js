import CategoryScreen from './screens/CategoryScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsDetailsScreen from './screens/MealsDetailsScreen';

const Stack = createNativeStackNavigator(); 
export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer >
      <Stack.Navigator initialRouteName="MealsCategory">
        <Stack.Screen name="MealsCategory" component={CategoryScreen}/>
        <Stack.Screen name="MealDescription" component={MealsDetailsScreen}/>      
      </Stack.Navigator>
    </NavigationContainer>

    </>
  );
}



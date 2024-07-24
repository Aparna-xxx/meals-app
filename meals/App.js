import { StyleSheet,View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { StatusBar } from 'expo-status-bar';
import Colors from './utils/Colors';

export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <View style={styles.container}>
    <CategoryScreen/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    //backgroundColor:Colors.WhiteBlue200
    backgroundColor:'#F0FFFF'
  }
});

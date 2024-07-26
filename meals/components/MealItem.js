import { View,Text, Pressable,Image,StyleSheet, Dimensions } from "react-native";
import {
    useFonts,
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  } from '@expo-google-fonts/manrope';
  

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;




function MealItem(props){
    let [fontsLoaded] = useFonts({
        Manrope_200ExtraLight,
        Manrope_300Light,
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
        Manrope_800ExtraBold,
      });
    
      if (!fontsLoaded) {
        return null;
      }
      else{
        return( 
                <View>
                    <Pressable>
                        <View>
                            <Image source={{uri:props.imageURL}} style={styles.imageStyle}/>
                            <Text style={styles.titleStyle}>{props.title}</Text>
                        </View>
                    </Pressable>
                    
                </View>
        )
        }

}

export default MealItem;

const styles=StyleSheet.create({
    imageStyle: {
        width:'100%',
        height:ScreenHeight/4,
       

    },
    titleStyle: {
        fontFamily:'Manrope_700Bold',
        fontSize:16,
        textAlign:'center'
        
    }
})
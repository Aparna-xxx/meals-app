import { View,Text, Pressable,Image,StyleSheet, Dimensions, Platform } from "react-native";
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

import Colors from "../utils/Colors"; 
  

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
                <View style={styles.CardStyle}>
                    <Pressable android_ripple={{'color':Colors.GreyBlue400}} style={({pressed})=>pressed&&Platform.OS==='ios'?styles.iosPressed:null}>
                    <View style={styles.InnerContainer}>
                        <View>
                            <Image source={{uri:props.imageURL}} style={styles.imageStyle}/>
                            <Text style={styles.titleStyle}>{props.title}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.descriptionText}>{props.duration}</Text>
                            <Text style={styles.descriptionText}>{props.complexity}</Text>
                            <Text style={styles.descriptionText}>{props.affordabilty}</Text>
                        </View>
                        </View>
                    </Pressable>
                    
                </View>
        )
        }

}

export default MealItem;

const styles=StyleSheet.create({

    CardStyle:{
        borderRadius:10,
        backgroundColor:Colors.WhiteBlue400,
        margin:10,
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,


    },

    InnerContainer:{
        overflow:'hidden',
        borderRadius:10,
    },

    imageStyle: {
        width:'100%',
        height:ScreenHeight/4,
       

    },
    titleStyle: {
        fontFamily:'Manrope_400Regular',
        fontSize:18,
        textAlign:'center',
        marginTop:ScreenHeight/70,
        
    },
    textContainer:{
       
        paddingHorizontal:ScreenWidth/16,
        paddingVertical:ScreenHeight/50,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    descriptionText:{
        fontFamily:'Manrope_400Regular',
        fontSize:16,
    },
    iosPressed:{
        opacity:0.7,
    }
})
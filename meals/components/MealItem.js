// // import { View,Text, Pressable,Image,StyleSheet, Dimensions, Platform } from "react-native";
// // import {
// //     useFonts,
// //     Manrope_200ExtraLight,
// //     Manrope_300Light,
// //     Manrope_400Regular,
// //     Manrope_500Medium,
// //     Manrope_600SemiBold,
// //     Manrope_700Bold,
// //     Manrope_800ExtraBold,
// //   } from '@expo-google-fonts/manrope';

// // import Colors from "../utils/Colors"; 
// // import AntDesign from '@expo/vector-icons/AntDesign';

  

// // const ScreenWidth = Dimensions.get('window').width;
// // const ScreenHeight = Dimensions.get('window').height;




// // function MealItem(props){
// //     let [fontsLoaded] = useFonts({
// //         Manrope_200ExtraLight,
// //         Manrope_300Light,
// //         Manrope_400Regular,
// //         Manrope_500Medium,
// //         Manrope_600SemiBold,
// //         Manrope_700Bold,
// //         Manrope_800ExtraBold,
// //       });
    
// //       if (!fontsLoaded) {
// //         return null;
// //       }
// //       else{
// //         function clicked(){
// //             console.log("clicked");
// //         }
// //         return( 
// //                 <View style={styles.CardStyle}>
                    
// //                     <View style={styles.InnerContainer}>
// //                         <View>
// //                             <Image source={{uri:props.imageURL}} style={styles.imageStyle}/>
// //                             <Text style={styles.titleStyle}>{props.title}</Text>
// //                             <Text style={styles.titleStyle}>{props.complexity}</Text>
// //                         </View>
// //                         <View style={styles.textContainer}>
// //                             <Pressable  style={({pressed})=>pressed?styles.Pressed:null} onPress={clicked}>
// //                             <AntDesign name="minuscircle" size={30} color={Colors.White700} />
// //                             </Pressable>
// //                             <View style={styles.quantityContainer}>
// //                                <Text style={styles.descriptionText}>0</Text>
// //                             </View>
// //                             <Pressable style={({pressed})=>pressed?styles.Pressed:null} onPress={clicked}>
// //                             <AntDesign name="pluscircle" size={30} color={Colors.White700} />
// //                             </Pressable>
// //                         </View>
// //                         </View>
                    
                    
// //                 </View>
// //         )
// //         }

// // }

// // export default MealItem;

// // const styles=StyleSheet.create({

// //     CardStyle:{
// //         borderRadius:10,
// //         backgroundColor:'black',
// //         margin:10,
// //         elevation:4,
// //         shadowColor:'black',
// //         shadowOpacity:0.25,
// //         shadowOffset:{width:0, height:2},
// //         shadowRadius:8,
// //         borderWidth:1,
    


// //     },

// //     InnerContainer:{
// //         overflow:'hidden',
// //         borderRadius:10,
// //     },

// //     imageStyle: {
// //         width:'100%',
// //         height:ScreenHeight/4,
       

// //     },
// //     titleStyle: {
// //         fontFamily:'Manrope_400Regular',
// //         fontSize:18,
// //         marginTop:ScreenHeight/70,
// //         color:Colors.White700,
// //         textAlign:'center'
        
// //     },
// //     textContainer:{
       
// //         paddingHorizontal:ScreenWidth/16,
// //         paddingVertical:ScreenHeight/50,
// //         flexDirection:'row',
// //         justifyContent:'space-between',
// //     },
// //     descriptionText:{
// //         fontFamily:'Manrope_400Regular',
// //         fontSize:16,
// //         color:'black',
// //         textAlign:'center',
// //         fontWeight:'bold'
// //     },
// //     Pressed:{
// //         opacity:0.7,
// //     },
// //     quantityContainer:{
// //         backgroundColor:Colors.White700,
// //         height:32,
// //         width:60,
// //         borderRadius:5,
// //         padding:2
// //     }
// // })


// import { View, Text, Pressable, Image, StyleSheet, Dimensions } from "react-native";
// import {
//     useFonts,
//     Manrope_200ExtraLight,
//     Manrope_300Light,
//     Manrope_400Regular,
//     Manrope_500Medium,
//     Manrope_600SemiBold,
//     Manrope_700Bold,
//     Manrope_800ExtraBold,
// } from '@expo-google-fonts/manrope';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import Colors from "../utils/Colors";
// import { useState } from 'react';

// const ScreenWidth = Dimensions.get('window').width;
// const ScreenHeight = Dimensions.get('window').height;

// function MealItem(props) {
//     let [fontsLoaded] = useFonts({
//         Manrope_200ExtraLight,
//         Manrope_300Light,
//         Manrope_400Regular,
//         Manrope_500Medium,
//         Manrope_600SemiBold,
//         Manrope_700Bold,
//         Manrope_800ExtraBold,
//     });

//     const [quantity, setQuantity] = useState(0);

//     if (!fontsLoaded) {
//         return null;
//     } else {
//         const incrementQuantity = () => {
//             setQuantity((prevQuantity) => prevQuantity + 1);
//             props.updateCart(props.id, quantity + 1);
//         };

//         const decrementQuantity = () => {
//             if (quantity > 0) {
//                 setQuantity((prevQuantity) => prevQuantity - 1);
//                 props.updateCart(props.id, quantity - 1);
//             }
//         };

//         return (
//             <View style={styles.CardStyle}>
//                 <View style={styles.InnerContainer}>
//                     <View>
//                         <Image source={{ uri: props.imageURL }} style={styles.imageStyle} />
//                         <Text style={styles.titleStyle}>{props.title}</Text>
//                         <Text style={styles.titleStyle}>{props.complexity}</Text>
//                     </View>
//                     <View style={styles.textContainer}>
//                         <Pressable style={({ pressed }) => pressed ? styles.Pressed : null} onPress={decrementQuantity}>
//                             <AntDesign name="minuscircle" size={30} color={Colors.White700} />
//                         </Pressable>
//                         <View style={styles.quantityContainer}>
//                             <Text style={styles.descriptionText}>{quantity}</Text>
//                         </View>
//                         <Pressable style={({ pressed }) => pressed ? styles.Pressed : null} onPress={incrementQuantity}>
//                             <AntDesign name="pluscircle" size={30} color={Colors.White700} />
//                         </Pressable>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

// export default MealItem;

// const styles = StyleSheet.create({
//     CardStyle: {
//         borderRadius: 10,
//         backgroundColor: 'black',
//         margin: 10,
//         elevation: 4,
//         shadowColor: 'black',
//         shadowOpacity: 0.25,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 8,
//         borderWidth: 1,
//     },
//     InnerContainer: {
//         overflow: 'hidden',
//         borderRadius: 10,
//     },
//     imageStyle: {
//         width: '100%',
//         height: ScreenHeight / 4,
//     },
//     titleStyle: {
//         fontFamily: 'Manrope_400Regular',
//         fontSize: 18,
//         marginTop: ScreenHeight / 70,
//         color: Colors.White700,
//         textAlign: 'center',
//     },
//     textContainer: {
//         paddingHorizontal: ScreenWidth / 16,
//         paddingVertical: ScreenHeight / 50,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     descriptionText: {
//         fontFamily: 'Manrope_400Regular',
//         fontSize: 16,
//         color: 'black',
//         textAlign: 'center',
//         fontWeight: 'bold',
//     },
//     Pressed: {
//         opacity: 0.7,
//     },
//     quantityContainer: {
//         backgroundColor: Colors.White700,
//         height: 32,
//         width: 60,
//         borderRadius: 5,
//         padding: 2,
//     },
// });


import { View, Text, Pressable, Image, StyleSheet, Dimensions } from "react-native";
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
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from "../utils/Colors";
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

function MealItem(props) {
    let [fontsLoaded] = useFonts({
        Manrope_200ExtraLight,
        Manrope_300Light,
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
        Manrope_800ExtraBold,
    });

    const { addToCart, removeFromCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    if (!fontsLoaded) {
        return null;
    } else {
        const incrementQuantity = () => {
            setQuantity((prevQuantity) => prevQuantity + 1);
            addToCart(props.id, 1);
        };

        const decrementQuantity = () => {
            if (quantity > 0) {
                setQuantity((prevQuantity) => prevQuantity - 1);
                removeFromCart(props.id, 1);
            }
        };

        return (
            <View style={styles.CardStyle}>
                <View style={styles.InnerContainer}>
                    <View>
                        <Image source={{ uri: props.imageURL }} style={styles.imageStyle} />
                        <Text style={styles.titleStyle}>{props.title}</Text>
                        <Text style={styles.titleStyle}>{props.complexity}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Pressable style={({ pressed }) => pressed ? styles.Pressed : null} onPress={decrementQuantity}>
                            <AntDesign name="minuscircle" size={30} color={Colors.White700} />
                        </Pressable>
                        <View style={styles.quantityContainer}>
                            <Text style={styles.descriptionText}>{quantity}</Text>
                        </View>
                        <Pressable style={({ pressed }) => pressed ? styles.Pressed : null} onPress={incrementQuantity}>
                            <AntDesign name="pluscircle" size={30} color={Colors.White700} />
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    }
}

export default MealItem;

const styles = StyleSheet.create({
    CardStyle: {
        borderRadius: 10,
        backgroundColor: 'black',
        margin: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        borderWidth: 1,
    },
    InnerContainer: {
        overflow: 'hidden',
        borderRadius: 10,
    },
    imageStyle: {
        width: '100%',
        height: ScreenHeight / 4,
    },
    titleStyle: {
        fontFamily: 'Manrope_400Regular',
        fontSize: 18,
        marginTop: ScreenHeight / 70,
        color: Colors.White700,
        textAlign: 'center',
    },
    textContainer: {
        paddingHorizontal: ScreenWidth / 16,
        paddingVertical: ScreenHeight / 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    descriptionText: {
        fontFamily: 'Manrope_400Regular',
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    Pressed: {
        opacity: 0.7,
    },
    quantityContainer: {
        backgroundColor: Colors.White700,
        height: 32,
        width: 60,
        borderRadius: 5,
        padding: 2,
    },
});

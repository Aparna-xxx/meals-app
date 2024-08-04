// import { View,FlatList,StyleSheet,ImageBackground } from "react-native";
// import { CATEGORIES, MEALS } from "../data/dummy-data";
// import { useRoute } from "@react-navigation/native";
// import MealItem from "../components/MealItem";
// import { useLayoutEffect } from "react";
// import Colors from "../utils/Colors";

// function MealsDetailsScreen( {navigation}){
//     const route= useRoute();
//     const catId=route.params.CategoryId
//     //console.log(catId)
//     const currentMeals = MEALS.filter((meal) =>
//         meal.categoryIds.includes(catId)
//       );

//     useLayoutEffect(()=>{
//         const catTitle= CATEGORIES.find((category)=>category.id===catId).title
//     navigation.setOptions({
//         title:catTitle,
//     })  
//     },[catId,navigation])
        
//     function renderMealItems(itemObject){
//         const item=itemObject.item;
//         const MealItemProps ={
//             title:item.title,
//             imageURL:item.imageUrl,
//             // duration:item.duration,
//             complexity:item.complexity,
//             //Complexity is the pricey
//             //affordabilty:item.affordability,

//         }
//         return <MealItem {...MealItemProps}/>
//     }
    
//     return(
//         <ImageBackground source={require("../assets/images/psg.jpg")}  style={styles.rootContainer} imageStyle={styles.backgroundImage}>
//         <View style={styles.rootContainer}>
//             <FlatList data={currentMeals}  keyExtractor={(item) => item.id} renderItem={renderMealItems}/>
//         </View>
//         </ImageBackground>
//     )
// }

// export default MealsDetailsScreen;

// const styles=StyleSheet.create({
//     rootContainer:{
//         flex:1,
//         paddingHorizontal:3
        
//     },
//     backgroundImage:{
//         opacity:0.5,
//     }
// })


import { View, FlatList, StyleSheet, ImageBackground } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { useLayoutEffect, useState } from "react";
import Colors from "../utils/Colors";

function MealsDetailsScreen({ navigation }) {
    const route = useRoute();
    const catId = route.params.CategoryId;

    const [cart, setCart] = useState({});

    const updateCart = (mealId, quantity) => {
        setCart((prevCart) => ({
            ...prevCart,
            [mealId]: quantity,
        }));
    };

    const currentMeals = MEALS.filter((meal) =>
        meal.categoryIds.includes(catId)
    );

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: catTitle,
        });
    }, [catId, navigation]);

    function renderMealItems(itemObject) {
        const item = itemObject.item;
        const MealItemProps = {
            id: item.id,
            title: item.title,
            imageURL: item.imageUrl,
            complexity: item.complexity,
            updateCart: updateCart,
        };
        return <MealItem {...MealItemProps} />;
    }

    return (
        <ImageBackground source={require("../assets/images/psg.jpg")} style={styles.rootContainer} imageStyle={styles.backgroundImage}>
            <View style={styles.rootContainer}>
                <FlatList data={currentMeals} keyExtractor={(item) => item.id} renderItem={renderMealItems} />
            </View>
        </ImageBackground>
    );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingHorizontal: 3,
    },
    backgroundImage: {
        opacity: 0.5,
    },
});

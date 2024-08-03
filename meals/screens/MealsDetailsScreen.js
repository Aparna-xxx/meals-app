import { View,FlatList,StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import Colors from "../utils/Colors";

function MealsDetailsScreen( {navigation}){
    const route= useRoute();
    const catId=route.params.CategoryId
    //console.log(catId)
    const currentMeals = MEALS.filter((meal) =>
        meal.categoryIds.includes(catId)
      );

    useLayoutEffect(()=>{
        const catTitle= CATEGORIES.find((category)=>category.id===catId).title
    navigation.setOptions({
        title:catTitle,
    })  
    },[catId,navigation])
        
    function renderMealItems(itemObject){
        const item=itemObject.item;
        const MealItemProps ={
            title:item.title,
            imageURL:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordabilty:item.affordability,

        }
        return <MealItem {...MealItemProps}/>
    }
    
    return(
        <View style={styles.rootContainer}>
            <FlatList data={currentMeals}  keyExtractor={(item) => item.id} renderItem={renderMealItems}/>
        </View>
    )
}

export default MealsDetailsScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:16,
        
    }
})
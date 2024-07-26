import { View,FlatList,StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

function MealsDetailsScreen(){
    const route= useRoute();
    const catId=route.params.CategoryId
    //console.log(catId)
    const currentMeals = MEALS.filter((meal) =>
        meal.categoryIds.includes(catId)
      );

    function renderMealItems(itemObject){
        return <MealItem title={itemObject.item.title} imageURL={itemObject.item.imageUrl}/>
    }
    
    return(
        <View style={styles.rootContainer}>
            <FlatList data={currentMeals} keyExtractor={(item)=>{item.id}} renderItem={renderMealItems}/>
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
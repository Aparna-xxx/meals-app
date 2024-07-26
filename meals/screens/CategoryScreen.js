import {CATEGORIES } from '../data/dummy-data'
import { FlatList,View,StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../utils/Colors';



function CategoryScreen({navigation}){

  function renderCategoryItem(itemObject){
    function pressHandler(){
      navigation.navigate("MealDescription", {
        CategoryId:itemObject.item.id,
        
      })
    }
    
    return <CategoryGridTile title={itemObject.item.title} color={itemObject.item.color} onPress={pressHandler}/>
  }

    return (
    <View style={styles.rootContainer}>  
      <FlatList  data={CATEGORIES}  keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2} />
    </View>
    );

}

export default CategoryScreen;

const styles= StyleSheet.create({
  rootContainer: {
    flex:1,
    backgroundColor:Colors.WhiteBlue100,
  }
})
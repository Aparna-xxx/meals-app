import {CATEGORIES } from '../data/dummy-data'
import { FlatList,View,StyleSheet,ImageBackground } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';



function CategoryScreen({navigation}){

  function renderCategoryItem(itemObject){
    function pressHandler(){
      navigation.navigate("MealDescription", {
        CategoryId:itemObject.item.id,
        
      })
    }
    //color={itemObject.item.color} if you want to padd custom colour too
    return <CategoryGridTile title={itemObject.item.title} onPress={pressHandler}/>
  }

  //code for icon button
  // function headerButtonOnPress(){
  //   console.log("header button pressed");
  // }

  // useLayoutEffect(()=>{
  //   navigation.setOptions({
     
  //       headerRight:()=>{
  //         return <IconButton onPress={headerButtonOnPress} icon="star" color="white"/>
  //       }
       
  //   })
  // },[navigation,headerButtonOnPress])

    return (
    
    <ImageBackground source={require("../assets/images/psg.jpg")}  style={styles.rootContainer} imageStyle={styles.backgroundImage}>

    <View style={styles.rootContainer}>  
      <FlatList  data={CATEGORIES}  keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2} />
    </View>
    </ImageBackground>
    );

}

export default CategoryScreen;

const styles= StyleSheet.create({
  rootContainer: {
    flex:1,
  },
  backgroundImage:{
    opacity:0.5,
  }

})
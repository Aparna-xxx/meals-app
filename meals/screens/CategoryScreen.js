// import {CATEGORIES } from '../data/dummy-data'
// import { FlatList,View,StyleSheet,ImageBackground } from 'react-native';
// import CategoryGridTile from '../components/CategoryGridTile';



// function CategoryScreen({navigation}){

//   function renderCategoryItem(itemObject){
//     function pressHandler(){
//       navigation.navigate("MealDescription", {
//         CategoryId:itemObject.item.id,
        
//       })
//     }
//     //color={itemObject.item.color} if you want to padd custom colour too
//     return <CategoryGridTile title={itemObject.item.title} onPress={pressHandler}/>
//   }

//   //code for icon button
//   // function headerButtonOnPress(){
//   //   console.log("header button pressed");
//   // }

//   // useLayoutEffect(()=>{
//   //   navigation.setOptions({
     
//   //       headerRight:()=>{
//   //         return <IconButton onPress={headerButtonOnPress} icon="star" color="white"/>
//   //       }
       
//   //   })
//   // },[navigation,headerButtonOnPress])

//     return (
    
//     <ImageBackground source={require("../assets/images/psg.jpg")}  style={styles.rootContainer} imageStyle={styles.backgroundImage}>

//     <View style={styles.rootContainer}>  
//       <FlatList  data={CATEGORIES}  keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2} />
//     </View>
//     </ImageBackground>
//     );

// }

// export default CategoryScreen;

// const styles= StyleSheet.create({
//   rootContainer: {
//     flex:1,
//   },
//   backgroundImage:{
//     opacity:0.5,
//   }

// })


// app/screens/CategoryScreen.js

import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ImageBackground } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import Category from '../backend/models/category';

const fetchCategories = async () => {
  const response = await fetch('http://192.168.100.4:3000/categories');
  const data = await response.json();
  return data.map(item => new Category(item.id, item.title, item.color));
};

function CategoryScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  function renderCategoryItem(itemObject) {
    function pressHandler() {
      navigation.navigate("MealDescription", {
        CategoryId: itemObject.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemObject.item.title}
        onPress={pressHandler}
        color={itemObject.item.color}
      />
    );
  }

  return (
    <ImageBackground source={require("../assets/images/psg.jpg")} style={styles.rootContainer} imageStyle={styles.backgroundImage}>
      <View style={styles.rootContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
      </View>
    </ImageBackground>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});

import {CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';


function renderCategoryItem(itemObject){
  return <CategoryGridTile title={itemObject.item.title} color={itemObject.item.color} />
}


function CategoryScreen(){
    return (
    <FlatList  data={CATEGORIES}  keyExtractor= {(item)=>item.id} renderItem={renderCategoryItem} numColumns={2} />
    );

}

export default CategoryScreen;
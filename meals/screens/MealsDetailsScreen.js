import { View,Text,StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen(){
    return(
        <View style={styles.rootContainer}>
            <Text>hello</Text>
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
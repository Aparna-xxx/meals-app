import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button,Pressable,Dimensions } from 'react-native';
import { CartContext } from '../context/CartContext';
import { MEALS } from '../data/dummy-data';
import Colors from '../utils/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

const ScreenWidth = Dimensions.get('window').width;

function CartScreen() {
    const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

    const cartItems = Object.keys(cart).map((mealId) => {
        const meal = MEALS.find((meal) => meal.id === mealId);
        return { ...meal, quantity: cart[mealId] };
    });

    function renderCartItem(itemData) {
        const item = itemData.item;
        return (
            <View style={styles.cartItem}>
                <Text style={styles.itemText}>{item.title} x {item.quantity}</Text>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={() => removeFromCart(item.id)}>
                        <AntDesign name="minuscircle" size={24} color='black' />
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => addToCart(item.id)}>
                        <AntDesign name="pluscircle" size={24} color='black' />
                    </Pressable>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={renderCartItem}
            />
            <View style={styles.clearButtonContainer}>
                <Button title="Clear Cart" onPress={clearCart} color={Colors.White700} />
            </View>
        </View>
    );
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WhiteBlue100,
        padding: 10,
    },
    cartItem: {
        backgroundColor: Colors.White700,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemText: {
        fontFamily: 'Manrope_400Regular',
        fontSize: 16,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:ScreenWidth/2,
        marginTop:16,
    },
    clearButtonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    
});

import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';
import { MEALS } from '../data/dummy-data';
import Colors from '../utils/Colors';

function CartScreen() {
    const { cart } = useContext(CartContext);

    const cartItems = Object.keys(cart).map((mealId) => {
        const meal = MEALS.find((meal) => meal.id === mealId);
        return { ...meal, quantity: cart[mealId] };
    });

    function renderCartItem(itemData) {
        const item = itemData.item;
        return (
            <View style={styles.cartItem}>
                <Text style={styles.itemText}>{item.title} x {item.quantity}</Text>
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
    },
    itemText: {
        fontFamily: 'Manrope_400Regular',
        fontSize: 16,
        color: 'black',
    },
});

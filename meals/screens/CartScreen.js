

import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Dimensions } from 'react-native';
import { CartContext } from '../context/CartContext';
import { MEALS } from '../backend/data/dummy-data';
import Colors from '../utils/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

const ScreenWidth = Dimensions.get('window').width;

function CartScreen() {
    const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

    const cartItems = Object.keys(cart).map((mealId) => {
        const meal = MEALS.find((meal) => meal.id === mealId);
        return { ...meal, quantity: cart[mealId], totalPrice: meal.price * cart[mealId] };
    });

    // Calculate total price
    const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

    function renderCartItem(itemData) {
        const item = itemData.item;
        return (
            <View style={styles.cartItem}>
                <View>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <Text style={styles.itemText}>Quantity: {item.quantity}</Text>
                    <Text style={styles.itemText}>Total Price: ₹{item.totalPrice.toFixed(2)}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={() => removeFromCart(item.id)}>
                        <AntDesign name="minuscircle" size={24} color='black' />
                    </Pressable>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
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
            <View style={styles.totalPriceContainer}>
                <Text style={styles.totalPriceText}>Total Price: ₹{totalPrice.toFixed(2)}</Text>
            </View>
            <View style={styles.clearButtonContainer}>
                <Pressable style={styles.clearButton} onPress={clearCart}>
                    <Text style={styles.clearButtonText}>Clear Cart</Text>
                </Pressable>
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
        alignItems: 'center',
        width: ScreenWidth / 2,
    },
    button: {
        backgroundColor: Colors.White700,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityText: {
        fontFamily: 'Manrope_400Regular',
        fontSize: 16,
        color: 'black',
        marginHorizontal: 20, // Space between the plus and minus buttons
    },
    totalPriceContainer: {
        marginTop: 10,
        alignItems: 'center',
        
    },
    totalPriceText: {
        fontFamily: 'Manrope_700Bold',
        fontSize: 18,
        color: 'black',
    },
    clearButtonContainer: {
        margin: 20,
        alignItems: 'center',
    },
    clearButton: {
        padding: 10,
        borderRadius: 5,
        width: ScreenWidth / 3,
        alignItems: 'center',
        backgroundColor: 'black', // Set the background color of the button
    },
    clearButtonText: {
        color: Colors.White700,
        fontFamily: 'Manrope_700Bold',
        fontSize: 16,
        textAlign: 'center',
        width: '100%',
    },
});

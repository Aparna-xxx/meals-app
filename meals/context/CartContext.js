import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState({});

    const addToCart = (mealId, quantity = 1) => {
        setCart((prevCart) => ({
            ...prevCart,
            [mealId]: (prevCart[mealId] || 0) + quantity,
        }));
    };

    const removeFromCart = (mealId, quantity = 1) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[mealId] > quantity) {
                updatedCart[mealId] -= quantity;
            } else {
                delete updatedCart[mealId];
            }
            return updatedCart;
        });
    };

    const clearCart = () => {
        setCart({});
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//     const [cart, setCart] = useState({});
//     const [userId, setUserId] = useState('default-user-id'); // Set a default user ID

//     const addToCart = (mealId, quantity = 1) => {
//         setCart((prevCart) => ({
//             ...prevCart,
//             [mealId]: (prevCart[mealId] || 0) + quantity,
//         }));
//     };

//     const removeFromCart = (mealId, quantity = 1) => {
//         setCart((prevCart) => {
//             const updatedCart = { ...prevCart };
//             if (updatedCart[mealId] > quantity) {
//                 updatedCart[mealId] -= quantity;
//             } else {
//                 delete updatedCart[mealId];
//             }
//             return updatedCart;
//         });
//     };

//     const clearCart = () => {
//         setCart({});
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, userId, setUserId }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

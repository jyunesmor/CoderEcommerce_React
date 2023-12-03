/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, count) => {
		const itemAgregar = { ...item, count };
		const newCart = [...cart];
		let isInCart = newCart.find((producto) => producto.id === itemAgregar.id);

		if (isInCart) {
			isInCart.count += count;
			setCart(newCart);
		} else {
			setCart([...cart, itemAgregar]);
		}
	};

	console.log(cart);

	const removeItem = (itemId) => {
		const cartUpdated = cart.filter((product) => product.id !== itemId);
		setCart(cartUpdated);
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ cart, setCart, addItem, removeItem, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

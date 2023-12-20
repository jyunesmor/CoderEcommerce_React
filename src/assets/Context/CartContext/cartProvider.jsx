/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	const [productosList, setProductosList] = useState([]);

	const productListRef = collection(db, "productos");

	useEffect(() => {
		getDocs(productListRef).then((resp) => {
			setProductosList(
				resp.docs.map((doc) => {
					return { ...doc.data(), id: doc.id };
				})
			);
		});
	}, []);

	const addProduct = (product, count) => {
		const { precio } = product;

		let precioCompra = precio * count;

		const productAgregar = { ...product, count, precioCompra };
		const newCart = [...carrito];

		let isInCart = newCart.find(
			(producto) => producto.id === productAgregar.id
		);

		if (isInCart) {
			isInCart.count += count;
			isInCart.precioCompra += precioCompra;
			setCarrito(newCart);
		} else {
			setCarrito([...carrito, productAgregar]);
		}
		console.log(carrito);
	};

	const borrarProduct = (productId) => {
		const cartUpdated = carrito.filter((product) => product.id !== productId);
		setCarrito(cartUpdated);
	};

	const vaciarCarrito = () => {
		setCarrito([]);
	};

	const totalQuantity = carrito.reduce(
		(acc, prod) => acc + prod.precioCompra,
		0
	);

	return (
		<CartContext.Provider
			value={{
				carrito,
				setCarrito,
				productosList,
				totalQuantity,
				addProduct,
				borrarProduct,
				vaciarCarrito,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

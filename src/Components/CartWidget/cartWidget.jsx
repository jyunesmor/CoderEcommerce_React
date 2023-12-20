/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { CartContext } from "../../assets/Context/CartContext/cartProvider";
import { Link } from "react-router-dom";

const cartWidget = () => {
	const { carrito } = useContext(CartContext);

	return (
		<div>
			<Link
				to="/carrito"
				className="cartwidget my-auto d-flex justify-content-center align-items-center p-1"
			>
				<img
					width=" 30"
					height="30"
					src="https://img.icons8.com/stickers/100/fast-cart.png"
					alt="fast-cart"
				/>
				<div className="cartWidgetNum">
					<span className="p-1">{carrito.length}</span>
				</div>
			</Link>
		</div>
	);
};

export default cartWidget;

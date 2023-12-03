import { useContext } from "react";
import { CartContext } from "../CartContext/cartProvider";

const cartWidget = () => {
	const { cart } = useContext(CartContext);

	return (
		<div>
			<div className="cartwidget my-auto d-flex justify-content-center align-items-center p-1">
				<img
					width=" 30"
					height="30"
					src="https://img.icons8.com/stickers/100/fast-cart.png"
					alt="fast-cart"
				/>
				<div className="cartWidgetNum">
					<span className="p-1">{cart.length}</span>
				</div>
			</div>
		</div>
	);
};

export default cartWidget;

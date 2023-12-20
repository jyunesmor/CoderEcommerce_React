import ItemListCarrito from "../ItemListCarrito/itemListCarrito";
import { useContext } from "react";
import { CartContext } from "../../assets/Context/CartContext/cartProvider";

const CardList = () => {
	const { carrito } = useContext(CartContext);

	return (
		<div className="container-carrito">
			<ItemListCarrito productos={carrito} />
		</div>
	);
};

export default CardList;

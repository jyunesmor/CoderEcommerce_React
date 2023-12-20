import SearchInput from "../SearchInput/searchInput";
import ItemListContainer from "../ItemListContainer/itemListContainer";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../assets/Context/CartContext/cartProvider";

const Productos = () => {
	const [arrProducts, setArrProducts] = useState([]);
	const [flag, setFlag] = useState("true");

	const { productosList } = useContext(CartContext);

	const handleSubmit = (search) => {
		const results = search
			? productosList.filter((producto) =>
					producto.nombre
						.toLocaleLowerCase()
						.includes(search.toLocaleLowerCase())
			  )
			: productosList;
		setFlag(false);
		setArrProducts(results);
	};

	return (
		<>
			<div className="container-producto">
				<div className="cont-input">
					<SearchInput enSubmit={handleSubmit} />
				</div>
				<div className="cont-ItemList">
					{flag ? (
						<ItemListContainer productos={productosList} />
					) : (
						<ItemListContainer productos={arrProducts} />
					)}
				</div>
			</div>
		</>
	);
};

export default Productos;

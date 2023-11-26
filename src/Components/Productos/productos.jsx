import SearchInput from "../SearchInput/searchInput";
import ItemListContainer from "../ItemListContainer/itemListContainer";
import obtenerProductos from "../../assets/jsonProductos/productos.json";
import { useState } from "react";

const Productos = () => {
	const [arrProducts, setArrProducts] = useState([]);
	const [flag, setFlag] = useState("true");

	const handleSubmit = (search) => {
		const results = search
			? obtenerProductos.filter((producto) =>
					producto.nombre
						.toLocaleLowerCase()
						.includes(search.toLocaleLowerCase())
			  )
			: obtenerProductos;
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
						<ItemListContainer productos={obtenerProductos} />
					) : (
						<ItemListContainer productos={arrProducts} />
					)}
				</div>
			</div>
		</>
	);
};

export default Productos;

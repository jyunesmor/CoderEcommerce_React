import Card from "../Card/card";
import DataProductos from "../../assets/jsonProductos/productos.json";

const itemListContainer = () => {
	console.log(DataProductos);
	const product = DataProductos.map((producto) => {
		return <Card key={producto.id} producto={producto} />;
	});

	return (
		<div className="section body">
			<div className="container is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
				{product}
			</div>
		</div>
	);
};

export default itemListContainer;

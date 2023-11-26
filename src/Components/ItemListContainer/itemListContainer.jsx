import Card from "../Card/card";

const itemListContainer = ({ productos }) => {
	const product = productos.map((product) => {
		return <Card key={product.id} producto={product} />;
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

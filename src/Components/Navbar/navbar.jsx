import CartWidget from "../CartWidget/cartWidget";

const navbar = () => {
	return (
		<div className="container is-flex p-3">
			<div className="w-25 is-flex">
				<h1 className="m-auto title is-3">SuperCercaTuyo</h1>
			</div>
			<div className="w-75">
				<div className="is-flex is-justify-content-space-around is-align-conent-center h-50">
					<h3 className="subtitle is-4 h-100 p-1">Sucursal Córdoba</h3>
					<CartWidget />
				</div>
				<div className="h-50">
					<ul className="buttons d-flex justify-content-evenly align-items-center h-100">
						<button className="button is-primary">Verduleria</button>
						<button className="button is-primary">Almacen</button>
						<button className="button is-primary">Bebidas</button>
						<button className="button is-primary">Carniceria</button>
						<button className="button is-primary">Limpieza</button>
						<button className="button is-primary">Electrodomesticos</button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default navbar;

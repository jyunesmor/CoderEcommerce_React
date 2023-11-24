import CartWidget from "../CartWidget/cartWidget";

const navbar = () => {
	return (
		<section className="section navbar">
			<nav className="container">
				<div className="columns">
					<div className="column logo is-4">
						<h1 className="title is-3">SuperCercaTuyo</h1>
					</div>
					<div className="column is-8 bg-warning">
						<div className="columns">
							{/* Columna superior Info */}
							<div className="column is-8 bg-info">
								<h3 className="subtitle is-4 h-100 p-1 has-text-centered ">
									Sucursal Córdoba
								</h3>
							</div>
							<div className="column is-4 bg-success">
								<CartWidget />
							</div>
						</div>
						<div className="columns is-flex-wrap-wrap">
							<div className="column is-4 is-flex">
								<button className="button is-primary m-auto is-size-7-touch">
									Verduleria
								</button>
							</div>
							<div className="column is-4 is-flex">
								<button className="button is-primary m-auto is-size-7-touch">
									Almacen
								</button>
							</div>
							<div className="column is-4 is-flex">
								<button className="button is-primary m-auto  is-size-7-touch">
									Bebidas
								</button>
							</div>
							<div className="column is-4 is-flex">
								<button className="button is-primary m-auto is-size-7-touch">
									Carniceria
								</button>
							</div>
							<div className="column is-4 is-flex">
								<button className="button is-primary m-auto is-size-7-touch">
									Limpieza
								</button>
							</div>
							<div className="column is-4 is-flex">
								<button className="button is-primary m-auto is-size-7-touch">
									Electrodomesticos
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default navbar;

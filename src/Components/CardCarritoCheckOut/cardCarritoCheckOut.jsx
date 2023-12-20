/* eslint-disable react/prop-types */
const CardCarrito = ({ producto }) => {
	return (
		<>
			<div className="container-carrito">
				<div className="carrito-list">
					<div className="card-image">
						<figure className="image">
							<img src={producto.imagen} alt={producto.nombre} />
						</figure>
					</div>
					<div className="card-content">
						<div className="prod-marca is-size-56 has-text-centered">
							{producto.nombre}
							<span className="is-size-7">{producto.marca}</span>
						</div>
						<div className="caract-prod is-size-7">
							{producto.capacidad}
							{producto.tipo}
						</div>
					</div>
					<div className="card-footer">
						<div className="card-footer-item">
							<div className="btn-detalle">
								$ {producto.precioCompra.toFixed(2)}
							</div>
							<div
								className="icon-delete"
								onClick={() => {
									borrarProduct(producto.id);
								}}
							>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/dusk/64/delete-forever.png"
									alt="delete-forever"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardCarrito;

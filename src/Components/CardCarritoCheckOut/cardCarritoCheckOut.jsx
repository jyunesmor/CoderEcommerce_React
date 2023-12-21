/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../assets/Context/CartContext/cartProvider";
const CardCarritoCheckOut = ({ producto }) => {
	const { borrarProduct } = useContext(CartContext);

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
						<div className="prod-nom is-size-5 has-text-centered">
							{producto.nombre}
						</div>
						<div className="prod-marca is-size-7 has-text-centered">
							{producto.marca}
						</div>
						<div className="prod-capa is-size-7 has-text-centered">
							{producto.capacidad}
						</div>
						<div className="prod-tipo is-size-7 has-text-centered">
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

export default CardCarritoCheckOut;

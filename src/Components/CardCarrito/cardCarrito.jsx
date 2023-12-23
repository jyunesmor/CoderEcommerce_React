/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../assets/Context/CartContext/cartProvider";

const CardCarrito = ({ producto }) => {
	const { carrito, setCarrito, borrarProduct } = useContext(CartContext);

	const newCart = [...carrito];
	let isInCart = newCart.find((prod) => prod.id === producto.id);

	function handleClickSumaCarrito() {
		if (isInCart) {
			isInCart.count = producto.count + 1;
			isInCart.precioCompra = producto.precioCompra += producto.precio;
			setCarrito(newCart);
		}
	}

	function handleClickRestaCarrito() {
		if (isInCart || producto.count > 0) {
			isInCart.count = producto.count - 1;
			isInCart.precioCompra = producto.precioCompra -= producto.precio;
			setCarrito(newCart);
		}
	}

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
						<div className="nom-marca has-text-centered">
							{producto.nombre} <br />
							<span>{producto.marca}</span>
						</div>

						<div className="caract-prod">
							{producto.capacidad} <br />
							<span>{producto.tipo}</span>
						</div>
						<div className="precio">$ {producto.precio.toFixed(2)}</div>
						<div className="itemCount">
							<div className="has-text-dark" onClick={handleClickRestaCarrito}>
								<FaMinus />
							</div>
							<div className="has-text-dark item">{producto.count}</div>
							<div className="has-text-dark" onClick={handleClickSumaCarrito}>
								<FaPlus />
							</div>
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

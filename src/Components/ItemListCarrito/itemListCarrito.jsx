/* eslint-disable react-hooks/rules-of-hooks */
import CardCarrito from "../CardCarrito/cardCarrito";
import { useContext } from "react";
import { CartContext } from "../../assets/Context/CartContext/cartProvider";
import { Link } from "react-router-dom";

const itemListCarrito = ({ productos }) => {
	const product = productos.map((product) => {
		return <CardCarrito key={product.id} producto={product} />;
	});

	const { totalQuantity, vaciarCarrito } = useContext(CartContext);

	return (
		<>
			{product.length > 0 ? (
				<div className="section body d-flex flex-column ">
					<div className="is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
						{product}
					</div>
					<div className="footer-list">
						<div className="title">
							El total de la Compra es de $ {totalQuantity.toFixed(2)}
						</div>
						<div className="items-btn">
							<div className="item-btn">
								<Link className="btn" onClick={vaciarCarrito}>
									Vaciar Carrito
								</Link>
							</div>
							<div className="item-btn">
								<Link to={"/productos"} className="btn">
									Seguir Comprando
								</Link>
							</div>
							<div className="item-btn">
								<Link to={"/checkout"} className="btn">
									Finalizar Compra
								</Link>
							</div>
						</div>
					</div>
				</div>
			) : (
				<h3 className="title has-text-centered p-5">
					No hay Elementos en el Carrito{" "}
				</h3>
			)}
		</>
	);
};

export default itemListCarrito;

/* eslint-disable react-hooks/rules-of-hooks */
import CartWidget from "../CartWidget/cartWidget";
import { Link } from "react-router-dom";
import { useAuth } from "../../assets/Context/AuthContext/authProvider";
import { useContext } from "react";
import { CartContext } from "../../assets/Context/CartContext/cartProvider";
import { useNavigate } from "react-router-dom";

const navbar = () => {
	const { logOut, user } = useAuth();
	const navigate = useNavigate();
	const { vaciarCarrito } = useContext(CartContext);

	const handleLogOut = () => {
		logOut();
		vaciarCarrito();
		navigate("/");
	};

	return (
		<>
			<div className="container container-navbar">
				<div className="cont-nav">
					<div className="container-logo">
						<div className="container-ti">
							<h1 className="title is-3">SuperCercaTuyo</h1>
						</div>
					</div>
					<div className="container-info-nav p-1">
						<div className="container-principal">
							<div>
								<h3 className="subtitle is-4 h-100 p-1">Sucursal Córdoba</h3>
							</div>
							<div>
								<CartWidget />
							</div>
						</div>
						<div className="container-btn h-50">
							<div className="row">
								{user && (
									<>
										<div className="item-btn col-lg-4 my-1">
											{user ? (
												<Link to="/cuerpo" className="btn">
													Home
												</Link>
											) : (
												<Link to="/" className="btn">
													Home
												</Link>
											)}
										</div>
										<div className="item-btn col-lg-4 my-1">
											<Link to="/productos" className="btn">
												Productos
											</Link>
										</div>
										<div className="item-btn col-lg-4 my-1">
											<Link to="/carrito" className="btn">
												Carrito de Compras
											</Link>
										</div>
									</>
								)}
								<div className="item-btn col-lg-4 my-1">
									<button className="btn" onClick={handleLogOut}>
										Cerrar Sesión
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default navbar;

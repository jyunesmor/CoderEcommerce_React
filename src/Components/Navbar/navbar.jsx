import CartWidget from "../CartWidget/cartWidget";
import { Link } from "react-router-dom";

const navbar = () => {
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
								<div className="item-btn col-lg-4 my-1">
									<Link to="/" className="btn">
										Home
									</Link>
								</div>
								<div className="item-btn col-lg-4 my-1">
									<Link to="/productos" className="btn">
										Productos
									</Link>
								</div>
								<div className="item-btn col-lg-4 my-1">
									<Link to="" className="btn disabled">
										Carrito de Compras
									</Link>
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

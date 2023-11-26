import "./navbar.scss";
import CartWidget from "../CartWidget/cartWidget";
import { Link } from "react-router-dom";

const navbar = () => {
	return (
		<div className="container container-navbar d-flex flex-md-row flex-column">
			<div className="container-logo w-25">
				<div>
					<h1 className="title is-3">SuperCercaTuyo</h1>
				</div>
			</div>
			<div className="container-info-nav w-75 p-1">
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
						<div className="col-lg-4 my-1 d-flex justify-content-center">
							<Link to="/" className="btn">
								Home
							</Link>
						</div>
						<div className="col-lg-4 my-1 d-flex justify-content-center">
							<Link to="/productos" className="btn">
								Productos
							</Link>
						</div>
						<div className="col-lg-4 my-1 d-flex justify-content-center">
							<Link to="" className="btn disabled">
								Carrito de Compras
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default navbar;

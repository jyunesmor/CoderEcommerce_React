import { Link } from "react-router-dom";

const cuerpo = () => {
	return (
		<div className="section body">
			<div className="container is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
				<h1>Bienvenidos al Carrito</h1>

				<div className="button has-text-centered is-primary">
					<Link to="/productos">Productos</Link>
				</div>
			</div>
		</div>
	);
};

export default cuerpo;

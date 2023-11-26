/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ producto }) => {
	return (
		<>
			<div className="my-2 p-2">
				<div className="card">
					<div className="card-image p-3">
						<figure className="image">
							<img src={producto.imagen} alt={producto.nombre} />
						</figure>
					</div>
					<div className="card-content p-2 mt-2 has-text-centered">
						<div className="card-tilte is-size-6">{producto.nombre}</div>
						<div className="card-subtitle is-size-7">{producto.capacidad}</div>
						<div className="card-subtitle is-size-5 has-text-weight-semibold pt-2">
							$ {producto.precio.toFixed(2)}
						</div>
					</div>
					<div className="card-footer">
						<div className="card-footer-item">
							<div className="button btn-detalle is-primary">
								<Link className="link" to={`/productos/${producto.id}`}>
									+ Info
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;

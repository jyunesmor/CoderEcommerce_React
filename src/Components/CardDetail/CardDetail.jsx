/* eslint-disable react/prop-types */

import ItemCount from "../ItemsCount/ItemCount";
import { useParams, Link } from "react-router-dom";
import ProductoData from "../../assets/jsonProductos/productos.json";

const CardDetail = () => {
	const { productoId } = useParams();

	const producto = ProductoData.find((producto) => producto.id == productoId);

	return (
		<>
			<div className="container container-cardDetail">
				<div className="cardDetail">
					<h1 className="has-text-centered">Detalle Producto</h1>
					<div className="container-card">
						<div className="my-2 p-2">
							<div className="card">
								<div className="card-info">
									<div className="image-card">
										<div className="card-image p-3">
											<figure className="image">
												<img src={producto.imagen} alt="Aceite_Pureza_1000" />
											</figure>
										</div>
									</div>
									<div className="content-card">
										<div className="card-content p-2 mt-2 has-text-centered">
											<div className="card-tilte is-size-5">
												{producto.nombre}
											</div>
											<div className="card-tilte is-size-4">
												{producto.marca}
											</div>
											<div className="card-subtitle is-size-6 my-2">
												{producto.tipo}
											</div>
											<div className="card-subtitle is-size-7">
												{producto.capacidad}
											</div>
											<div className="card-subtitle is-size-4 has-text-weight-semibold pt-2 mt-2">
												$ {producto.precio.toFixed(2)}
											</div>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="card-footer-item">
										<ItemCount />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="button btn-volver has-background-success">
						<Link className="link" to="/productos">
							Volver
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardDetail;

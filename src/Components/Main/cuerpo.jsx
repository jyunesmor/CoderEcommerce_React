/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "../../assets/Context/AuthContext/authProvider";
import { useContext } from "react";
import { CartContext } from "../../assets/Context/CartContext/cartProvider";
import Pedidos from "../Pedidos/pedidos";

const cuerpo = () => {
	const { user } = useAuth();
	const { pedidosList } = useContext(CartContext);

	const pedidosFiltered = pedidosList.filter(
		(pedidos) => pedidos.id_usuario === user.uid
	);

	return (
		<div className="section body">
			<div className="container d-flex flex-column">
				<div className="m-auto">
					<h1 className="title-principal">
						Bienvenidos al Carrito {user.email}
					</h1>
				</div>
				{pedidosFiltered.length == 0 ? (
					<div className="m-auto mt-5">
						<h2 className="subtitle is-size-3">Tu Super Siempre con vos</h2>
					</div>
				) : (
					<div>
						<div className="title-secundario has-text-centered mt-6">
							Mis Pedidos
						</div>
						<Pedidos pedidos={pedidosFiltered} />
					</div>
				)}
			</div>
		</div>
	);
};

export default cuerpo;

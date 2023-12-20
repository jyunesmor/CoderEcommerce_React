/* eslint-disable react-hooks/rules-of-hooks */

import { useContext, useState } from "react";
import { CartContext } from "../../assets/Context/CartContext/cartProvider";
import CardCarritoCheckOut from "../CardCarritoCheckOut/cardCarritoCheckOut";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../assets/Context/AuthContext/authProvider";

function checkout() {
	const { carrito, totalQuantity, vaciarCarrito } = useContext(CartContext);
	const navigate = useNavigate();
	const { user } = useAuth();

	const { register, handleSubmit } = useForm();
	const [pedidoId, setPedidoId] = useState("");

	const pedidoRef = collection(db, "pedidos");

	const comprar = (data) => {
		const pedido = {
			id_usuario: user.uid,
			cliente: data,
			productos: carrito,
			total: totalQuantity,
		};
		addDoc(pedidoRef, pedido).then((doc) => {
			setPedidoId(doc.id);
			vaciarCarrito();
		});
	};

	const product = carrito.map((product) => {
		return <CardCarritoCheckOut key={product.id} producto={product} />;
	});

	if (pedidoId) {
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Tu Pedido fue Realizado",
			text: `el Número es ${pedidoId}`,
			showConfirmButton: false,
			timer: 600,
		});
		navigate("/");
	}

	return (
		<div className="container cont-checkout">
			Termina tu Pedido
			<form
				className="contenedor-pedido d-flex"
				onSubmit={handleSubmit(comprar)}
			>
				<div className="m-auto">
					<div className="inputs-group m-auto d-flex flex-column">
						<div className="input-item p-3 m-auto w-100">
							<label>Ingresa tu nombre completo</label>
							<input
								type="text"
								required
								className="input w-100"
								{...register("nombre")}
							/>
						</div>
						<div className="input-item p-3 m-auto w-100">
							<label>Ingresa tu nombre DNI</label>
							<input
								type="number"
								required
								className="input w-100"
								{...register("dni")}
							/>
						</div>
						<div className="input-item p-3 m-auto w-100">
							<label>Ingresa tu email</label>
							<input
								type="email"
								required
								className="input w-100"
								{...register("email")}
							/>
						</div>
						<div className="input-item p-3 m-auto w-100">
							<label>Ingresa tu número de Telefono</label>
							<input
								type="text"
								required
								{...register("telefono")}
								className="input w-100"
							/>
						</div>
					</div>
				</div>
				<div className="detalle-pedido">
					<div className="carrito-pedido">
						<div className="list-prod">{product}</div>
					</div>
					<div className="enviar-cont">
						<div className="total-pedido">
							El total a Abonar es: $ {totalQuantity}
						</div>
						<div>
							<button className="btn" type="submit">
								Realizar Pedido
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default checkout;

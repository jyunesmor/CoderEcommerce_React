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
	const { carrito, totalQuantity, vaciarCarrito, getPedidosLista } =
		useContext(CartContext);
	const navigate = useNavigate();
	const { user } = useAuth();

	const { register, handleSubmit } = useForm();
	const [pedidoId, setPedidoId] = useState("");

	const pedidoRef = collection(db, "pedidos");
	const hoy = new Date();

	const comprar = (data) => {
		const pedido = {
			id_usuario: user.uid,
			cliente: data,
			productos: carrito,
			total: totalQuantity,
			fecha: `${hoy.getDate()}-${hoy.getMonth() + 1}-${hoy.getFullYear()}`,
		};
		addDoc(pedidoRef, pedido).then((doc) => {
			setPedidoId(doc.id);
			vaciarCarrito();
		});
		console.log(pedido);
		getPedidosLista();
	};

	const product = carrito.map((product) => {
		return <CardCarritoCheckOut key={product.id} producto={product} />;
	});

	if (pedidoId) {
		Swal.fire({
			icon: "success",
			title: "Tu Pedido fue Realizado",
			text: `el Número es ${pedidoId}`,
			showConfirmButton: false,
			timer: 6000,
		});
		navigate("/cuerpo");
	}

	return (
		<div className="cont-checkout">
			<form
				className="contenedor-pedido d-flex"
				onSubmit={handleSubmit(comprar)}
			>
				<div className="m-auto">
					<div className="tit-check has-text-centered">Datos del pedido</div>
					<div className="inputs-group m-auto d-flex flex-column">
						<div className="input-item p-3 m-auto">
							<label>Ingresa tu nombre completo</label>
							<input
								type="text"
								required
								placeholder="Nombre y Apellido Completo"
								className="input"
								{...register("nombre")}
							/>
						</div>
						<div className="input-item p-3 m-auto">
							<label>Ingresa tu nombre DNI</label>
							<input
								type="text"
								pattern="[0-9]{8}"
								title="Ingrese un número de 8 Digitos ej.: 12345678"
								required
								placeholder="Ingrese su Documento"
								className="input"
								{...register("dni")}
							/>
						</div>
						<div className="input-item p-3 m-auto">
							<label>Ingresa tu email</label>
							<input
								type="email"
								value={`${user.email}`}
								placeholder="super@gmail.com"
								required
								className="input"
								{...register(`${user.email}`)}
							/>
						</div>
						<div className="input-item p-3 m-auto">
							<label>Ingresa tu número de Telefono</label>
							<input
								type="tel"
								pattern="[0-9]{3}-[0-9]{7}"
								title="Ingrese el número Codigo de area de 3 digitos y los siguientes sin 15 ej.: 123-1234567"
								placeholder="Código de área-Número"
								required
								{...register("telefono")}
								className="input"
							/>
						</div>
					</div>
				</div>
				<div className="detalle-pedido">
					<div className="tit-check  has-text-centered">
						Elementos Agregados
					</div>
					<div className="carrito-pedido">
						<div className="list-prod">{product}</div>
					</div>
					<div className="enviar-cont">
						<div className="total-pedido">
							El total a Abonar es: $ {totalQuantity.toFixed(2)}
						</div>
						<div className="btn-cont">
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

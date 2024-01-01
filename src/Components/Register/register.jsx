/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../assets/Context/AuthContext/authProvider";
import { auth, googleProvider } from "../../config/firebase";

function register() {
	const { signUp } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signUp(email, password);
			navigate("/cuerpo");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container-log">
			<div className="title-log">
				<h2>Registro de Usuario</h2>
			</div>
			<form className="formulario">
				<div className="mb-3">
					<label className="form-label" htmlFor="email">
						Correo Electronico / Usuario
					</label>
					<input
						type="email"
						id="email"
						className="form-control"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="password">
						Contraseña
					</label>
					<input
						type="password"
						id="password"
						className="form-control"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleSubmit}
				>
					Registrar
				</button>
				<p
					className="has-text-centered
				"
				>
					Tengo usuario <Link to="/">Iniciar Sesión</Link>
				</p>
			</form>
		</div>
	);
}

export default register;

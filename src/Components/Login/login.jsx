/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useAuth } from "../../assets/Context/AuthContext/authProvider";
import { Link, useNavigate } from "react-router-dom";

function login() {
	const { logIn } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await logIn(email, password);
			navigate("/cuerpo");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container-log">
			<form className="formulario">
				<div className="mb-3">
					<label className="form-label" htmlFor="email">
						Email address
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
						Password
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
					Ingresar
				</button>
				<Link to={"/register"} type="submit" className="btn btn-primary">
					Registrate
				</Link>
			</form>
		</div>
	);
}

export default login;

/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useAuth } from "../../assets/Context/AuthContext/authProvider";
import { useNavigate } from "react-router-dom";

function login() {
	const { logIn, signInWithGoogle } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await logIn(email, password);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const signInGoogle = async () => {
		await signInWithGoogle();
	};

	return (
		<div className="container">
			<form className="container-Form">
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
				<button
					type="submit"
					className="btn btn-primary"
					onClick={signInGoogle}
				>
					Ingresar con Google
				</button>
			</form>
		</div>
	);
}

export default login;

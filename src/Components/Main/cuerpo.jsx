/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "../../assets/Context/AuthContext/authProvider";

const cuerpo = () => {
	const { user } = useAuth();

	return (
		<div className="section body">
			<div className="container d-flex flex-column">
				<div className="m-auto">
					<h1 className="title is-size-1">
						Bienvenidos al Carrito {user.email}
					</h1>
				</div>
				<div className="m-auto mt-5">
					<h2 className="subtitle is-size-3">Tu Super Siempre con vos</h2>
				</div>
			</div>
		</div>
	);
};

export default cuerpo;

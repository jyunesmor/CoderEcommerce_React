import Navbar from "./Components/Navbar/navbar";
import Cuerpo from "./Components/Main/cuerpo";

import "bulma/css/bulma.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/app.scss";

function App() {
	return (
		<>
			<div>
				<Navbar />
				<Cuerpo />
			</div>
		</>
	);
}

export default App;

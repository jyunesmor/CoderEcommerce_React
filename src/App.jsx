import Navbar from "./Components/Navbar/navbar";
import Cuerpo from "./Components/Main/cuerpo";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "bulma/css/bulma.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/app.scss";

function App() {
	return (
		<>
			<Navbar />
			<Cuerpo />
		</>
	);
}

export default App;

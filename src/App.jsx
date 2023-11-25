import Cuerpo from "./Components/Main/cuerpo";
import Layout from "./Components/Layout/Layout";
import ItemListContainer from "./Components/ItemListContainer/itemListContainer";
import CardDetail from "./Components/CardDetail/CardDetail";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "bulma/css/bulma.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/app.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Cuerpo />} />
					<Route path="productos" element={<ItemListContainer />} />
					<Route path="productos/:productoId" element={<CardDetail />} />
				</Route>
				{/* 				<Route path="*" element={<Error />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;

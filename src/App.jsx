import Cuerpo from "./Components/Main/cuerpo";
import Layout from "./Components/Layout/Layout";
import Productos from "./Components/Productos/productos";
import CardDetail from "./Components/CardDetail/CardDetail";
import CardList from "./Components//CardList/cardList";
import Checkout from "./Components/Checkout/checkout";
import AuthProvider from "./assets/Context/AuthContext/authProvider";
import Login from "./Components/Login/login";
import Register from "./Components/Register/register";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/app.scss";
import CartProvider from "./assets/Context/CartContext/cartProvider";
import "sweetalert2/src/sweetalert2.scss";

function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index="login" element={<Login />} />
							<Route path="cuerpo" element={<Cuerpo />} />
							<Route path="register" element={<Register />} />
							<Route path="productos" element={<Productos />} />
							<Route path="productos/:productoId" element={<CardDetail />} />
							<Route path="carrito" element={<CardList />} />
							<Route path="checkout" element={<Checkout />} />
						</Route>
						{/* 				<Route path="*" element={<Error />} /> */}
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</AuthProvider>
	);
}

export default App;

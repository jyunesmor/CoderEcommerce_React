import axios from "axios";

const obtenerProductos = async (search) => {
	const imagenes = await axios.get("../jsonProductos/productos.json", {
		headers: {},
		params: {
			query: search,
		},
	});
	console.log(imagenes.data.results);
	return imagenes.data.results;
};

export default obtenerProductos;

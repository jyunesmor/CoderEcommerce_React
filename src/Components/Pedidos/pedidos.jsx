function pedidos({ pedidos }) {
	console.log(pedidos);
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th className="has-text-centered" scope="col">
						Id Pedido
					</th>
					<th className="has-text-centered" scope="col">
						Nombre
					</th>
					<th className="has-text-centered" scope="col">
						Cantidad de Elementos
					</th>
					<th className="has-text-centered" scope="col">
						Importe Compra
					</th>
				</tr>
			</thead>
			<tbody>
				{pedidos.map((pedido) => {
					return (
						<tr key={pedido.id}>
							<td className="has-text-centered" scope="row">
								{pedido.id}
							</td>
							<td className="has-text-centered">{pedido.cliente.nombre}</td>
							<td className="has-text-centered">{pedido.productos.length}</td>
							<td className="has-text-centered">$ {pedido.total.toFixed(2)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default pedidos;

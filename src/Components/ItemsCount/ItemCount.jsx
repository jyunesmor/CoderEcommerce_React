/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/cartProvider";

const ItemCount = ({ item }) => {
	const { addItem } = useContext(CartContext);

	const [count, setCount] = useState(0);

	function handleClickSuma() {
		setCount(count + 1);
	}

	function handleClickResta() {
		if (count > 0) {
			setCount(count - 1);
		}
	}

	return (
		<>
			<div className="container itemCounter">
				<div className="itemCount">
					<div
						className="itemrestar has-text-success"
						onClick={handleClickResta}
					>
						<FaMinus />
					</div>
					<div className="itemvalor has-text-success">{count}</div>
					<div className="itemsumar has-text-success" onClick={handleClickSuma}>
						<FaPlus />
					</div>
				</div>
				<div
					className="button btn-carrito has-background-success is-size-6"
					onClick={() => {
						addItem(item, count);
					}}
				>
					Agregar a Carrito
				</div>
			</div>
		</>
	);
};

export default ItemCount;

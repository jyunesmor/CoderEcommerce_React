import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

const ItemCount = () => {
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
				<div className="button btn-carrito has-background-success is-size-6">
					Agregar a Carrito
				</div>
			</div>
		</>
	);
};

export default ItemCount;

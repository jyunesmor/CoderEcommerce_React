import { useState } from "react";

const searchInput = ({ enSubmit }) => {
	const [searchProducts, setSearchProducts] = useState("");

	function handleChange(e) {
		e.preventDefault();
		setSearchProducts(e.target.value);
		enSubmit(searchProducts);
	}

	function handleReset(e) {
		e.preventDefault();
		setSearchProducts("");
		enSubmit(searchProducts);
	}

	return (
		<>
			<div className="container-searchImput">
				<div className="cont-input">
					<div className="container-input">
						<input
							className="input is-medium"
							type="text"
							placeholder="Producto a buscar"
							value={searchProducts}
							onChange={handleChange}
						></input>
					</div>
					<div className="container-btnSearch">
						<div className="btn" onClick={handleReset}>
							Volver
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default searchInput;

const cartWidget = () => {
	return (
		<div>
			<div className="cartwidget my-auto d-flex justify-content-center align-items-center p-1">
				<img
					width=" 30"
					height="30"
					src="https://img.icons8.com/stickers/100/fast-cart.png"
					alt="fast-cart"
				/>
				<span className="p-1">0</span>
			</div>
		</div>
	);
};

export default cartWidget;

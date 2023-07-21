
import { useState } from "react";
import image from ".././assets/img/123.png";

export const Main = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1 className="text-2xl text-center border-4 border-red-300 p-6 shadow-md xl:shadow-2xl hover:bg-gray-200">
				Количество кликов: {count}
			</h1>
			<div className="row mt-5">
				<div className="col-md-6">
					<img src={image} alt="" width="100%" />
				</div>
				<div className="col-md-6">
					<button
						className="rounded-md border-2 border-green-500 hover:bg-green-400 p-6 text-xl"
						onClick={() => {
							setCount(count + 1);
						}}
					>
						Кликни на мне
					</button>
				</div>
			</div>
		</>
	);
};
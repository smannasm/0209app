import { useEffect, useState } from "react";

export const Settings = () => {
	const [advice, setAdvice] = useState("");

	useEffect(() => {
		const url = "https://api.adviceslip.com/advice";
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				console.log(json.slip.advice);
				setAdvice(json.slip.advice);
			} catch (error) {
				console.log("Error: ", error);
			}
		};
		fetchData();
	}, []);
	return (
		<div className="container mx-auto">
			<p className="text-red-700 text-4xl p-2 border-2 ">{advice}</p>
		</div>
	);
};
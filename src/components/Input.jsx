import { useState } from "react";

function Input({ karant, onValueChange }) {
	const [value, setValue] = useState("");

	const handleInputChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
		onValueChange(karant, newValue); // Pass the karat and value back to the parent
	};

	return (
		<div>
			<label className="text-xl">عيار {karant}</label>
			<input
				type="number"
				className="p-2 rounded-md border"
				value={value}
				onChange={handleInputChange}
			/>
		</div>
	);
}

export default Input;

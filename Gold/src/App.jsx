import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taxs, setTaxs] = useState(0);
  const [data, setData] = useState({ K24: 0, K21: 0, K18: 0, K14: 0 });

  // Convert inputValue to a number or default to 0
  const inputNumber = parseFloat(inputValue) || 0;

  // Calculate myGrams dynamically
  const myGrams =
    ((data.K24 * 24) / 21 +
      data.K21 +
      (data.K18 * 18) / 21 +
      (data.K14 * 14) / 21) *
    inputNumber;

  // Calculate value of tax-adjusted grams
  const valueOfTaxs = myGrams * (100 - taxs) / 100;

  const handleValueChange = (karant, value) => {
    setData((prevData) => ({
      ...prevData,
      [`K${karant}`]: parseFloat(value) || 0, // Update the specific karat value
    }));
  };

  return (
    <div className="part-1 bg-background h-screen flex flex-col items-center justify-center gap-7">
      <h1 className="text-3xl font-bold">سعر عيار 21 </h1>
      <input
        type="text"
        maxLength={4}
        className="p-5 rounded-2xl text-2xl"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1 className="text-3xl font-bold">نسبة الخصم %</h1>
      <input
        type="text"
        maxLength={2} // Allow up to 2 digits for tax percentage
        className="p-5 rounded-2xl text-2xl"
        value={taxs}
        onChange={(e) => setTaxs(parseFloat(e.target.value) || 0)} // Update taxs state
      />
      <div className="bg-emerald-300 p-5 flex flex-col gap-5">
        <Input karant={24} onValueChange={handleValueChange} />
        <Input karant={21} onValueChange={handleValueChange} />
        <Input karant={18} onValueChange={handleValueChange} />
        <Input karant={14} onValueChange={handleValueChange} />
      </div>
      <button className="bg-green text-2xl font-bold rounded-lg p-5">دهب صافي</button>
      <div className="result-box flex text-2xl gap-5 items-center">
        <p>{valueOfTaxs.toFixed(2)}</p>
        <p className="font-bold">EG</p>
      </div>
    </div>
  );
}

export default App;

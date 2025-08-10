import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259251/pexels-photo-259251.jpeg')`,
      }}
    >
      <div className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/40">
        <h1 className="text-2xl font-bold text-center text-white drop-shadow-md mb-6">
          💱 Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-4"
        >
          {/* From Input */}
          <div>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          {/* Swap Button */}
          <div className="relative flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="border-2 border-white rounded-full bg-blue-600 text-white px-4 py-1 hover:bg-blue-700 transition-all shadow-md"
            >
              🔄 Swap
            </button>
          </div>

          {/* To Input */}
          <div>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

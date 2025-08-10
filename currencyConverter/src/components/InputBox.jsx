import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 flex items-center gap-4 hover:shadow-xl transition-all duration-300">
      {/* Amount Section */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-500 text-sm font-medium mb-2 inline-block tracking-wide"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-gray-50 py-2 px-3 rounded-lg text-gray-800 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all disabled:opacity-60"
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Section */}
      <div className="w-1/2 text-right">
        <p className="text-gray-500 text-sm font-medium mb-2">Currency Type</p>
        <select
          className="rounded-lg px-3 py-2 bg-gray-50 border border-gray-300 text-gray-800 cursor-pointer outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all disabled:opacity-60"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

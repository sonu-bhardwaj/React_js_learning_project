// import { useEffect, useState } from "react";


// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({}); //we use  {}  this for error resolution 
//   useEffect(() => {
//     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//       .then((res) => res.json())
//       .then((res) => setData(res.currency));  // we cam also use res[currency] to acces key
//     console.log(data);
//   }, [currency]);
//   console.log(data);
//   return data;
// }
// export default useCurrencyInfo;
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // Start with empty object

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]); // ✅ Correct way to access dynamic key
      })
      .catch((err) => console.error(err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberALlowed] = useState(false);
  const [charAllowed, setCharALlowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!()*+,-./:;<=>?@[]^_`{|}~";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const passwordRef = useRef(null);
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    // alert("Password copied!");
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-lg shadow-lg rounded-xl px-6 py-8 text-orange-500 bg-gray-800">
        <h1 className="text-center text-white text-3xl font-bold mb-8">
          Password Generator
        </h1>

        {/* Password Box */}
        <div className="flex flex-col sm:flex-row shadow rounded-lg overflow-hidden mb-6 bg-white">
          <input
            type="text"
            value={password}
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
            className="outline-none flex-grow py-3 px-4 text-black placeholder-gray-500 text-sm sm:text-base"
          />
          <button
            className="bg-blue-700 text-white px-5 py-3 text-sm sm:text-base hover:bg-blue-600 transition-all rounded-r-md"
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
          <button
            onClick={passwordGenerator}
            className="bg-blue-700 text-white px-5 py-3 text-sm sm:text-base hover:bg-blue-600 transition-all sm:mt-0 sm:ml-2 rounded-l-md"
          >
            Generate
          </button>
        </div>

        <div className="flex flex-col gap-6 text-sm sm:text-base">
          {/* Length Slider */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <label className="text-white whitespace-nowrap font-medium">
              Length: {length}
            </label>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="w-full cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={() => setNumberALlowed((prev) => !prev)}
            />
            <label className="text-white">Include Numbers</label>
          </div>

          {/* Special Characters */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={() => setCharALlowed((prev) => !prev)}
            />
            <label className="text-white">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

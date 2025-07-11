import './App.css'
import{useState} from 'react'



function App() {
  const getInitialValue = () => {
  let num;
  do {
    const input = prompt("Enter the starting number:");
    num = parseInt(input);
  } while (isNaN(num));

  return num;
};
  

  let [counter,setCounter]=useState(getInitialValue)
 
const addValue=()=>{
console.log("counter console",counter)

// counter=counter+1
setCounter(counter+1)

}



const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter can't go below 0");
    }
  };


  return (
    <>
      <h1>Counter app</h1>
      <h4>(increased By 1)</h4>
      <h2>Counter value:{counter}</h2>
      <br />
      <button
      onClick={addValue}
      >add value</button>
      <button
      onClick={removeValue}
      >decrease value</button>
    </>
  )
}

export default App

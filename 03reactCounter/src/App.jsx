import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count < 20){
      setCount(count + 1);
    }else{
      alert("Can't increase now");
    }
  }
  const removeValue = () => {
    if(count == 0){
      alert("Can't decrease now")
    }else{
      setCount(count - 1);
    }
  }
   return (
    <div>
    <h1>Chai aur React</h1>
    <h2>Counter value : {count}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </div>
  )
}

export default App

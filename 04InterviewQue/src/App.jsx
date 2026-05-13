import { useState } from 'react'

function App() {
  const [count, setCount] = useState(5)

  const addValue = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    

    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)  
  }
  return (
    <>
      <p>Count {count}</p>
      <button onClick={addValue}>Add Count</button>
    </>
  )
}

export default App

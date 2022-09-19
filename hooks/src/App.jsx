import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Você clicou ${count}`
  }, [count])

  // useEffect(() => {
  //   document.title = count
  // }, [])

  return (
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Adicionar
        </button>

        <button onClick={() => setCount((count) => count - 1)}>
          Remover
        </button>

        <br/>

        Contador: {count}
    </div>
  )
}

export default App

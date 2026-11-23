import { useState } from 'react'
import './App.css'
import ProblemPage from './pages/ProblemPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProblemPage></ProblemPage>
    </>
  )
}

export default App

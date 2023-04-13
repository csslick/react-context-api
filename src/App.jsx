import { useState } from 'react'
import './App.css'
import Page from './components/Page'

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkmode);
    console.log(darkmode);
  }

  return (
    <Page 
      darkmode={darkmode} 
      handleDarkMode={handleDarkMode}
    />
  )
}

export default App

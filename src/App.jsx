import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import { Context } from './Context';

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkmode);
    console.log(darkmode);
  }

  // 환경변수
  console.log('api_key: ', import.meta.env.VITE_API_KEY);

  return (
    // Context가 하위 컴포넌트들에게 state를 제공
    <Context.Provider value={
      { darkmode, handleDarkMode }
    }>
      <Page 
        darkmode={darkmode} 
        handleDarkMode={handleDarkMode}
      />
    </Context.Provider>
  )
}

export default App

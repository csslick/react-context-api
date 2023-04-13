import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tab, setTab] = useState(0)
  console.log(tab);
  // JSX 배열 데이터
  const articleJSX = [
    <article id="tab1">
      <h1>Content 1</h1>
      <p>콘텐츠 1</p>
    </article>
    ,
    <h1>Content 2</h1>,
    <h1>Content 3</h1>,
  ]

  return (
    <div className="App">
      <h1>App</h1>
      <div className="tab-group">
        <a href="#tab1" onClick={()=>{setTab(0)}}>content 1</a>
        <a href="#tab2" onClick={()=>{setTab(1)}}>content 2</a>
        <a href="#tab3" onClick={()=>{setTab(2)}}>content 3</a>
      </div>
      {
        tab == 0 && articleJSX[tab]
      }
      {
        tab == 1 && articleJSX[tab]
      }
      {
        tab == 2 && articleJSX[tab]
      }
      
    </div>
  )
}

export default App

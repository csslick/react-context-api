// Context(전역 state) 요청
import { useContext } from 'react'
import { Context } from '../Context';

export default function Header() {
  // console.log('Header ', props);
  // const { handleDarkMode } = props;
  const { darkmode, handleDarkMode} = useContext(Context);
  console.log('Context: ', darkmode);
  return (
    <header>
      <h1>header</h1>
      <button
        onClick={handleDarkMode}
      >dark mode</button>
    </header>
  )
}

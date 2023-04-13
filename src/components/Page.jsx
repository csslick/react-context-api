import React from 'react'
import Header from './Header'
export default function Page(props) {
  console.log('Page ', props);
  return (
    <div className={
      props.darkmode ? 'App darkmode' : 'App'
    }>
      <Header 
        darkmode={props.darkmode} 
        handleDarkMode={props.handleDarkMode}
      />
      <h1>Page</h1>
    </div>
  )
}

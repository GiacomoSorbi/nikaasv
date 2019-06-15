import React from 'react'
import './App.css'
import Navigation from './components/Navigation'

function App(props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation navRole='main' />
      </header>
      {props.children}
      <footer className='App-footer'>
        <Navigation navRole='footer' />
      </footer>
    </div>
  )
}

export default App

import React from 'react'
import Filter from './components/Filter'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Modal from './components/Modal'
import reloadMsnry from './msnry'

function App() {
  // Call function after 5 seconds when .grid div is in the DOM
  // I'll fix this when I learn how to do it properly
  setTimeout(reloadMsnry, 3000)

  return (
    <div className="App">
      <Header />
      <Filter />
      <Gallery />
      <Modal />
    </div>
  )
}

export default App

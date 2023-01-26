import React from 'react'
import Filter from './components/Filter'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Modal from './components/Modal'

function App() {
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

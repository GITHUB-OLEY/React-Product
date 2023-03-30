import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mybutton from './component/Mybutton'
import Product_Item from './component/Product_Item'

function App() {

  return (
    <div className="App">
      <h1>welcome to React OLEY</h1>
      <Mybutton />
      <Product_Item />
    </div>
  )
}

export default App

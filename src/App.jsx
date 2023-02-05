import React from 'react'
import styled from 'styled-components'
// import Product from './components/Product'
// import Footer from './components/Footer'
// import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import Login from './components/Login'

const Contain=styled.div`

`


const App = () => {
  return (
    <Contain>
      {/* <Footer/> */}
      {/* <ProductList/> */}
      <Navbar/>
      <Login/>
      {/* <Product/> */}
    </Contain>
  )
}

export default App
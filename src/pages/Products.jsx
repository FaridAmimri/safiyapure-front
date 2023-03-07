/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

function Products() {
  return (
    <Container>
      <Navbar />
      <ProductList />
      <Footer />
    </Container>
  )
}

export default Products

const Container = styled.div``

/** @format */

import styled from 'styled-components'
import ProductItem from './ProductItem'
import { productItems } from '../data'

function ProductList() {
  return (
    <Container>
      {productItems.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default ProductList

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
`

/** @format */

import styled from 'styled-components'
import ProductItem from './ProductItem'
import { productItems } from '../data'
import { mobile, tablet } from '../responsive'

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

  ${mobile({
    flexDirection: 'column',
    alignContent: 'center',
    padding: 0
  })}
`

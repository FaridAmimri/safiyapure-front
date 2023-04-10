/** @format */

import styled from 'styled-components'
import ProductItem from './ProductItem'
import { mobile, tablet } from '../responsive'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ProductList({ category, type }) {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : 'http://localhost:5000/api/products'
        )
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [category])

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((product) => product.type.includes(type))
      )
  }, [products, category, type])

  return (
    <Container>
      {filteredProducts.map((item) => (
        <ProductItem item={item} key={item._id} />
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

  ${tablet({
    flexDirection: 'column',
    alignContent: 'center',
    padding: 0
  })}
`

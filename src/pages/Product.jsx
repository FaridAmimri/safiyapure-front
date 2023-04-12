/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { Remove, Add } from '@mui/icons-material'
import { mobile, tablet } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { publicRequest } from '../requests'
import { addProduct } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function Product() {
  const location = useLocation()
  const productId = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity
      })
    )
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/${productId}`)
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [productId])

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <ProductContainer>
            <Image src={product.image} alt={product.title} />
          </ProductContainer>
          <DetailsContainer>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Price>{product.price} €</Price>
            <FilterContainer>
              <FilterWrapper>
                <FilterTitle>Conditionnement</FilterTitle>
                <FormControl sx={{ margin: 1 }} size='small'>
                  <Select
                    color='success'
                    labelId='conditioning'
                    id='conditioning'
                    value='30 ml'
                  >
                    <MenuItem value='30 ml'>{product.conditioning}</MenuItem>
                  </Select>
                </FormControl>
              </FilterWrapper>
            </FilterContainer>
            <QuantityContainer>
              <FilterTitle>Quantité</FilterTitle>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </QuantityContainer>
            <ButtonContainer>
              <Button variant='contained' color='success' onClick={handleClick}>
                Ajouter au panier
              </Button>
            </ButtonContainer>
          </DetailsContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Product

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  padding: 100px 50px 50px 50px;
  height: 450px;

  ${mobile({
    height: 930,
    flexDirection: 'column',
    padding: '100px 40px 40px 40px'
  })}

  ${tablet({
    height: 930,
    flexDirection: 'column',
    padding: '100px 40px 40px 40px'
  })}
`

const ProductContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  ${mobile({
    display: 'flex',
    justifyContent: 'center'
  })}

  ${tablet({
    display: 'flex',
    justifyContent: 'center'
  })}
`

const Image = styled.img`
  position: absolute;
  top: -100px;

  ${mobile({
    top: -130
  })}

  ${tablet({
    top: -135
  })}
`

const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Title = styled.h1`
  font-weight: 400;
  color: var(--text-color-secondary);

  ${mobile({
    marginBottom: 20
  })}
`

const Description = styled.p`
  ${mobile({
    marginBottom: 20
  })}
`

const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
  color: var(--text-color-secondary);
`

const FilterContainer = styled.div`
  display: flex;

  ${mobile({
    marginBottom: 20
  })}
`

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const FilterTitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
  margin-right: 5px;
`

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: var(--text-color-secondary);
  }

  ${mobile({
    marginBottom: 30
  })}
`

const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: var(--background-color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`

const ButtonContainer = styled.div``

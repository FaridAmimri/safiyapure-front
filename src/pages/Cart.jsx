/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import { mobile, tablet } from '../responsive'
import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userRequest } from '../requests'
import { deleteProduct } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const KEY = process.env.REACT_APP_STRIPE

function Cart() {
  const cart = useSelector((state) => state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const dispatch = useDispatch()

  const handleToken = (token) => {
    setStripeToken(token)
  }

  const handleDelete = (product) => {
    dispatch(deleteProduct(product))
  }

  useEffect(() => {
    const request = async (req, res) => {
      try {
        const res = await userRequest.post('checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100
        })
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    stripeToken && request()
  }, [stripeToken, cart.total])

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>VOTRE PANIER</Title>
        <Top>
          <Button
            variant='outlined'
            size='small'
            color='success'
            sx={{ width: '150px' }}
          >
            RETOUR
          </Button>
          <Texts>
            <Text>Nombre d'articles ({cart.quantity})</Text>
          </Texts>
          <Link to='/products/cosmetiques'>
            <Button
              variant='outlined'
              size='small'
              color='success'
              sx={{ width: '150px' }}
            >
              CONTINUER
            </Button>
          </Link>
        </Top>

        <Bottom>
          <Products>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <Item>
                  <ProductDetail>
                    <Image src={product.image} alt={product.title} />
                    <Content>
                      <Name>
                        <b>Produit: </b>
                        {product.title}
                      </Name>
                      <Id>
                        <b>Id: </b>
                        {product._id.slice(0, 10)}...
                      </Id>
                      <Conditioning>
                        <b>Conditionnement: </b>
                        {product.conditioning}
                      </Conditioning>
                      <Quantity>
                        <b>Quantité: </b>
                        {product.quantity}
                      </Quantity>
                    </Content>
                  </ProductDetail>
                  <PriceDetail>
                    <Price>{product.price * product.quantity} €</Price>
                    <Button
                      variant='outlined'
                      size='small'
                      color='error'
                      startIcon={<DeleteIcon />}
                      sx={{ width: '100px' }}
                      onClick={() => handleDelete(product)}
                    >
                      Suppr
                    </Button>
                  </PriceDetail>
                </Item>
                <Hr />
              </Product>
            ))}
          </Products>

          <Summary>
            <SummaryTitle>VOTRE COMMANDE</SummaryTitle>
            <SummaryItem>
              <SummaryContent>Article(s)</SummaryContent>
              <SummaryPrice>{cart.total} €</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryContent>Livraison</SummaryContent>
              <SummaryPrice>4.90 €</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryContent>Remise</SummaryContent>
              <SummaryPrice>-4.90 €</SummaryPrice>
            </SummaryItem>
            <SummaryItem className='total'>
              <SummaryContent>Total</SummaryContent>
              <SummaryPrice>{cart.total} €</SummaryPrice>
            </SummaryItem>
            <StripeCheckout
              name='SafiyaPure'
              image=''
              billingAddress
              shippingAddress
              description={`Votre total est de ${cart.total} €`}
              amount={cart.total * 100}
              locale='fr'
              currency='EUR'
              token={handleToken}
              stripeKey={KEY}
            >
              <StripeButton>
                <Button variant='contained' size='medium' color='success'>
                  COMMANDER
                </Button>
              </StripeButton>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart

const Container = styled.div``

const Wrapper = styled.div`
  padding: 80px 20px 20px 20px;

  ${mobile({
    paddingTop: 80
  })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: var(--text-color-secondary);

  ${mobile({
    marginBottom: 10
  })}
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Texts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({
    visibility: 'hidden'
  })}

  ${tablet({
    visibility: 'hidden'
  })}
`

const Text = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: 'column'
  })}

  ${tablet({
    flexDirection: 'column'
  })}
`

const Products = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`

const Product = styled.div``

const Item = styled.div`
  display: flex;

  ${mobile({
    flexDirection: 'column'
  })}

  ${tablet({
    flexDirection: 'column'
  })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;

  ${tablet({
    justifyContent: 'center'
  })}
`

const Image = styled.img`
  width: 200px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Name = styled.span`
  margin-bottom: 10px;
`

const Id = styled.span`
  margin-bottom: 10px;
`

const Conditioning = styled.span`
  margin-bottom: 10px;
`

const Quantity = styled.span`
  margin-bottom: 10px;
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mobile({
    alignItems: 'center',
    marginBottom: 30
  })}

  ${tablet({
    alignItems: 'center',
    marginBottom: 30
  })}
`

const Price = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;

  .total {
    font-size: 24px;
    font-weight: 500;
  }
`
const SummaryTitle = styled.h2`
  font-weight: 300;
  text-align: center;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`

const SummaryContent = styled.span``

const SummaryPrice = styled.span``

const StripeButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

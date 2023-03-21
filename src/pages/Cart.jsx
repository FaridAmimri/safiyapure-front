/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '@mui/material/Button'
import OilJpg from '../images/product1.jpg'
import { Remove, Add } from '@mui/icons-material'
import { mobile, tablet } from '../responsive'

function Cart() {
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
            <Text>Panier d'Achat (2)</Text>
            <Text>List de souhaits (0)</Text>
          </Texts>
          <Button
            variant='outlined'
            size='small'
            color='success'
            sx={{ width: '150px' }}
          >
            CONTINUER
          </Button>
        </Top>

        <Bottom>
          <Product>
            <Item>
              <ProductDetail>
                <Image src={OilJpg} alt='huile cosmétique' />
                <Content>
                  <Name>
                    <b>Produit: </b>Huile d'Aloe vera
                  </Name>
                  <Id>
                    <b>Id: </b>48758595958437
                  </Id>
                  <Conditioning>
                    <b>Conditionnement: </b>30 ml
                  </Conditioning>
                </Content>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove />
                  <Amount>3</Amount>
                  <Add />
                </AmountContainer>
                <Price>34 €</Price>
              </PriceDetail>
            </Item>
            <Hr />
          </Product>

          <Summary>
            <SummaryTitle>VOTRE COMMANDE</SummaryTitle>
            <SummaryItem>
              <SummaryContent>Article(s)</SummaryContent>
              <SummaryPrice>13 €</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryContent>Livraison</SummaryContent>
              <SummaryPrice>4.90 €</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryContent>Remise</SummaryContent>
              <SummaryPrice>-6.90 €</SummaryPrice>
            </SummaryItem>
            <SummaryItem className='total'>
              <SummaryContent>Total</SummaryContent>
              <SummaryPrice>13 €</SummaryPrice>
            </SummaryItem>
            <StripeButton>
              <Button variant='contained' size='medium' color='success'>
                COMMANDER
              </Button>
            </StripeButton>
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
  justify-content: space-between;

  ${mobile({
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
`

const Product = styled.div`
  flex: 3;
`

const Item = styled.div`
  display: flex;

  ${mobile({
    flexDirection: 'column'
  })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
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

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mobile({
    alignItems: 'center',
    marginBottom: 30
  })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`

const Amount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const Price = styled.div`
  font-size: 30px;
  font-weight: 300;
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

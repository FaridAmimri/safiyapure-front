/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OilJpg from '../images/product1.jpg'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { Remove, Add } from '@mui/icons-material'

function Product() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ProductContainer>
          <Image src={OilJpg} alt='huile cosmétique' />
        </ProductContainer>
        <DetailsContainer>
          <Title>Huile d'Aloe Vera</Title>
          <Description>
            L'huile d'Aloe Vera redonne de la brillance à vos cheveux. Très
            hydratante et nourrissante elle est particulièrement recommandée
            pour les cheveux secs et très secs. Elle peut être utilisée au
            quotidien pour hydrater, nourrir et redonner de l'éclat à tous types
            de peaux ainsi que pour lutter efficacement contre le vieillissement
            cutané en stimulant la production de collagène.
          </Description>
          <Price>4,70 €</Price>
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
                  <MenuItem value='30 ml'>30 ml</MenuItem>
                </Select>
              </FormControl>
            </FilterWrapper>
          </FilterContainer>
          <QuantityContainer>
            <FilterTitle>Quantité</FilterTitle>
            <Remove />
            <Amount>1</Amount>
            <Add />
          </QuantityContainer>
          <ButtonContainer>
            <Button variant='contained' color='success'>
              Ajouter au panier
            </Button>
          </ButtonContainer>
        </DetailsContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  height: 450px;
`

const ProductContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  top: -100px;
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
`

const Description = styled.p``

const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
  color: var(--text-color-secondary);
`

const FilterContainer = styled.div`
  display: flex;
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

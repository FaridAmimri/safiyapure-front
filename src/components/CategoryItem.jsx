/** @format */

import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function CategoryItem({ item }) {
  return (
    <Container id={item.category}>
      <Link to={`/products/${item.category}`}>
        <Image src={item.image} />
        <Details>
          <ButtonContainer>
            <Button variant='contained' color='success'>
              VOIR
            </Button>
          </ButtonContainer>
        </Details>
      </Link>
    </Container>
  )
}

export default CategoryItem

const Container = styled.div`
  position: relative;
  width: 300px;
  border-radius: 35px;
  margin-right: 20px;
  overflow: hidden;
`

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`

const Details = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
`

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`

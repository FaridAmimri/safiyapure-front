/** @format */

import styled from 'styled-components'
import MuiButton from './MuiButton'
import AlmondJpg from '../images/almond.jpg'

function Popular() {
  return (
    <Container>
      <Left>
        <Title>Une huile pour lutter contre les problèmes cutanées</Title>
        <Description>
          L'huile d'amande douce est riche en oméga 3, 6 et 9 qui nourrissent la
          peau en profondeur et fortifient le film hydrolipidique. Elle aide
          ainsi à lutter contre la sécheresse cutanée et à apaiser les
          démangeaisons et les sensations d'inconfort.
        </Description>
        <ButtonContainer>
          <MuiButton text='En savoir plus' />
        </ButtonContainer>
      </Left>

      <Right>
        <ImageContainer>
          <Image src={AlmondJpg} alt="huile d'mande douce" />
        </ImageContainer>
      </Right>
    </Container>
  )
}

export default Popular

const Container = styled.div`
  background-color: var(--background-color-primary);
  height: auto;
  display: flex;
`

const Left = styled.div`
  flex: 2;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h5`
  font-weight: 400;
  font-size: 50px;
  color: var(--text-color-tertiary);
`

const Description = styled.p`
  color: var(--text-color-primary);
  margin: 30px 0;
  font-weight: 400;
  font-size: 20px;
`

const ButtonContainer = styled.div`
  button {
    font-size: 14px;
  }
`

const Right = styled.div`
  flex: 1;
  padding: 80px;
`

const ImageContainer = styled.div`
  position: relative;
  width: 417px;
  height: 507px;
  background: #c4c4c4;
  border-radius: 35px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

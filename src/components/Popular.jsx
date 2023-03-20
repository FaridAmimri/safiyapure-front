/** @format */

import styled from 'styled-components'
import MuiButton from './MuiButton'
import ElementIcon from '../images/element.png'
import AlmondJpg from '../images/almond.jpg'
import { mobile, tablet } from '../responsive'

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
          <IconContainer>
            <img src={ElementIcon} alt='icône étoile' />
          </IconContainer>
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

  ${mobile({
    flexDirection: 'column'
  })}
`

const Left = styled.div`
  flex: 2;
  padding: 80px 80px 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mobile({
    padding: '50px 30px 0 20px'
  })}
`

const Title = styled.h5`
  font-weight: 400;
  font-size: 50px;
  color: var(--text-color-tertiary);

  ${mobile({
    fontSize: 28
  })}
`

const Description = styled.p`
  color: var(--text-color-primary);
  margin: 30px 0;
  font-weight: 400;
  font-size: 20px;

  ${mobile({
    fontSize: 16
  })}
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 14px;
  }
`

const IconContainer = styled.div`
  width: 51px;
  height: 51px;
  display: none;

  ${mobile({
    display: 'flex'
  })}
`

const Right = styled.div`
  flex: 1;
  padding: 80px 80px 0 80px;

  ${mobile({
    padding: '50px 20px 0 20px'
  })}
`

const ImageContainer = styled.div`
  position: relative;
  width: 417px;
  height: 507px;
  background: #c4c4c4;
  border-radius: 35px;
  overflow: hidden;

  ${mobile({
    padding: '50px 20px 0 20px',
    width: 285,
    height: 345
  })}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({
    position: 'absolute',
    top: 0,
    left: 0
  })}
`

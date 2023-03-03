/** @format */

import styled from 'styled-components'
import Dropdown from './Dropdown'
import { advicesItems } from '../data'

function Utilization() {
  return (
    <Container>
      <Top>
        <Left>
          <Title>Les bienfaits des huiles végétales</Title>
        </Left>
        <Right>
          <Description>
            Avec une composition riche en lipides, les huiles végétales aident à
            régénérer et réparer les peaux sèches et atopiques. Ces dernières
            sont connues pour leur effet surgraissant qui va permettre d'adoucir
            de la peau, de la nourrir et de l'hydrater en profondeur.
          </Description>
        </Right>
      </Top>

      <Bottom>
        {advicesItems.map((advice) => (
          <Dropdown key={advice.id} title={advice.title}>
            {advice.content}
          </Dropdown>
        ))}
      </Bottom>
    </Container>
  )
}

export default Utilization

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Top = styled.div`
  background-color: var(--background-color-primary);
  display: flex;
`

const Left = styled.div`
  flex: 1;
  padding: 30px;
`

const Title = styled.h5`
  color: var(--text-color-tertiary);
  font-size: 50px;
  font-weight: 400;
  line-height: 79px;
  width: 90%;
`

const Right = styled.div`
  flex: 1;
  padding: 40px;
`

const Description = styled.span`
  color: var(--text-color-primary);
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
`

const Bottom = styled.div`
  background-color: var(--text-color-secondary);
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

/** @format */

import styled from 'styled-components'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'
import { mobile, tablet } from '../responsive'

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const rotate = isOpen ? 'rotate(180deg)' : 'rotate(0)'
  const rotation = { transform: rotate, transition: '0.6s ease-in-out' }

  return (
    <Container>
      <Top
        onClick={(e) => {
          setIsOpen(!isOpen)
        }}
      >
        <Title>{title}</Title>
        <KeyboardArrowUpIcon style={rotation} />
      </Top>
      <Bottom>{isOpen && <Content>{children}</Content>}</Bottom>
    </Container>
  )
}

export default Dropdown

const Container = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 20px;

  ${mobile({
    width: '100%'
  })}

  ${tablet({
    width: '100%'
  })}
`

const Top = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-between;
  color: var(--text-color-primary);
`

const Title = styled.h5`
  font-size: 18px;
  font-weight: 500;
`

const Bottom = styled.div``

const Content = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color-primary);
  opacity: 55%;
  animation: dropdown 2s ease-in-out;

  @keyframes dropdown {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(3px);
    }
  }

  ${mobile({
    marginTop: 30
  })}

  ${tablet({
    marginTop: 10
  })}
`

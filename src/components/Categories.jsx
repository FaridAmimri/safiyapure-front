/** @format */

import styled from 'styled-components'
import ElementIcon from '../images/element.png'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { categorieItems } from '../data'
import CategoryItem from './CategoryItem'
import { useState } from 'react'
import { mobile, tablet } from '../responsive'

function Categories() {
  const slideListLength = categorieItems.length
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleArrow = (direction) => {
    if (direction === 'left') {
      setCurrentSlide(
        currentSlide === 0 ? slideListLength - 1 : currentSlide - 1
      )
    }
    if (direction === 'right') {
      setCurrentSlide(
        currentSlide === slideListLength - 1 ? 0 : currentSlide + 1
      )
    }
  }
  return (
    <Container>
      <Top>
        <Left>
          <TitleCarousel>Des solutions pour tous</TitleCarousel>
          <AnimationContainer>
            <Image src={ElementIcon} alt='icône étoile' />
          </AnimationContainer>
          <Carousel currentSlide={currentSlide}>
            {categorieItems.map((item) => (
              <CategoryItem key={item.id} item={item} id={item} />
            ))}
          </Carousel>
        </Left>

        <Right>
          <Wrapper>
            <Title>Des solutions pour tous</Title>
            <ArrowContainer>
              <LeftArrow>
                <IconButton
                  direction='left'
                  onClick={() => handleArrow('left')}
                  style={{ backgroundColor: '#D2EDA8', opacity: '45%' }}
                >
                  <ChevronLeftIcon />
                </IconButton>
              </LeftArrow>
              <RightArrow>
                <IconButton
                  direction='right'
                  onClick={() => handleArrow('right')}
                  style={{ backgroundColor: '#D2EDA8' }}
                >
                  <ChevronRightIcon />
                </IconButton>
              </RightArrow>
            </ArrowContainer>
          </Wrapper>
        </Right>
      </Top>

      <Bottom>
        <AnimationContainer>
          <Image src={ElementIcon} alt='icône étoile' />
        </AnimationContainer>
      </Bottom>
    </Container>
  )
}

export default Categories

const Container = styled.div`
  background-color: var(--background-color-primary);
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const Top = styled.div`
  display: flex;

  ${mobile({
    flexDirection: 'column',
    marginTop: '50px'
  })}
`

const Left = styled.div`
  flex: 3;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`

const TitleCarousel = styled.h2`
  color: var(--text-color-tertiary);
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  display: none;

  ${mobile({
    display: 'flex'
  })}
`

const AnimationContainer = styled.div`
  width: 79px;
  height: 79px;

  ${mobile({
    width: 59,
    height: 59
  })}
`

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`

const Carousel = styled.div`
  display: flex;
  margin: 40px 0;
  align-items: flex-end;
  overflow: hidden;
  transform: translateX(${(props) => props.currentSlide * 20}vw);
  transition: all 1.5s ease-in-out;

  ${mobile({
    margin: 0
  })}

  #Cheveux {
    height: 314px;
  }
  #Visage {
    height: 390px;
  }
  #Peau {
    height: 470px;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Wrapper = styled.div`
  padding: 40px;
  position: relative;

  ${mobile({
    display: 'flex',
    justifyContent: 'center'
  })}
`

const Title = styled.h2`
  color: var(--text-color-tertiary);
  font-size: 45px;
  font-weight: 400;
  margin-bottom: 60px;

  ${mobile({
    display: 'none'
  })}
`

const ArrowContainer = styled.div`
  width: 107px;
  height: 42px;
  display: flex;
  justify-content: space-between;
`

const LeftArrow = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 50%;
`

const RightArrow = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 50%;
`

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
`

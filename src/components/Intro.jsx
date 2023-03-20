/** @format */

import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import EastIcon from '@mui/icons-material/East'
import ElementIcon from '../images/element.png'
import { sliderItems } from '../data'
import { useState } from 'react'
import { mobile, tablet } from '../responsive'

function Intro() {
  const slideListLength = sliderItems.length
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
        <ImageContainer>
          <img src={ElementIcon} alt='icône étoile' />
        </ImageContainer>
        <TitleContainer>
          <Title>Un soin capillaire adapté à tous type de cheveux</Title>
        </TitleContainer>
      </Top>

      <Bottom>
        <ContainerArrow>
          <LeftArrow>
            <IconButton
              direction='left'
              onClick={() => handleArrow('left')}
              style={{ backgroundColor: '#D2EDA8' }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </LeftArrow>
          <RightArrow>
            <IconButton
              direction='right'
              onClick={() => handleArrow('right')}
              style={{ backgroundColor: '#D2EDA8', opacity: '45%' }}
            >
              <ChevronRightIcon />
            </IconButton>
          </RightArrow>
        </ContainerArrow>

        <Carousel currentSlide={currentSlide}>
          {sliderItems.map((slide, index) => (
            <Slide key={index}>
              <Image src={slide.image} alt='huile cosmétique' />
              <Sticker>
                <Product>{slide.title}</Product>
                <Price>
                  {slide.price} € <EastIcon />
                </Price>
              </Sticker>
            </Slide>
          ))}
        </Carousel>
      </Bottom>
    </Container>
  )
}

export default Intro

const Container = styled.div`
  background-color: var(--background-color-primary);
  height: auto;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px;

  ${mobile({
    padding: 40,
    flexDirection: 'column'
  })};
`

const ImageContainer = styled.div`
  width: 67px;
  height: 67px;

  ${mobile({
    display: 'none'
  })}
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.span`
  display: flex;
  width: 70%;
  color: var(--text-color-tertiary);
  font-size: 50px;
  font-weight: 400;
  text-align: center;

  ${mobile({
    fontSize: 36,
    width: '100%'
  })};
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 80px 80px;
  overflow: hidden;

  ${mobile({
    flexDirection: 'column-reverse',
    padding: 0
  })};
`

const ContainerArrow = styled.div`
  width: 42px;
  height: 109px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  z-index: 99;

  .arrow {
    color: black;
  }

  ${mobile({
    flexDirection: 'row',
    width: 'auto',
    margin: 0,
    alignItems: 'flex-end'
  })}
`

const LeftArrow = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: var(--background-color-secondary);

  ${mobile({
    marginRight: 20
  })}
`

const RightArrow = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: var(--background-color-secondary);
`

const Carousel = styled.div`
  display: flex;
  transform: translateX(${(props) => props.currentSlide * -50}vw);
  transition: all 1.5s ease-in-out;
`

const Slide = styled.div`
  position: relative;
  width: 550px;
  height: 430px;
  border-radius: 35px;
  margin-left: 40px;
  overflow: hidden;

  ${mobile({
    width: 230,
    height: 170
  })}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Sticker = styled.div`
  background: var(--background-color-secondary);
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 202px;
  top: 300px;
  left: 0;
  border-radius: 0px 51.5px 51.5px 0px;
  padding-left: 20px;
  z-index: 10;
  cursor: pointer;

  ${mobile({
    width: 150,
    height: 50,
    top: 100
  })}
`

const Product = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 5px 0;

  ${mobile({
    fontSize: 12
  })}
`

const Price = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 24px;

  svg {
    padding-left: 20px;
  }

  ${mobile({
    fontSize: 18
  })}
`

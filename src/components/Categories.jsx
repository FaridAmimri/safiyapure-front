/** @format */

import styled from 'styled-components'
import ElementIcon from '../images/element.png'
import BioIcon from '../images/bio.png'
import { categorieItems } from '../data'
import CategoryItem from './CategoryItem'
import { mobile, tablet } from '../responsive'

function Categories() {
  return (
    <Container>
      <Top>
        <Left>
          <TitleCarousel>Des solutions pour tous</TitleCarousel>
          <AnimationContainer>
            <Image src={ElementIcon} alt='icône étoile' />
          </AnimationContainer>
          <Carousel>
            {categorieItems.map((item) => (
              <CategoryItem key={item.id} item={item} id={item} />
            ))}
          </Carousel>
        </Left>

        <Right>
          <Wrapper>
            <Title>Des huiles Bio, analysées 100 % pures</Title>
            <BioContainer>
              <Image src={BioIcon} alt='icône étoile' />
            </BioContainer>
          </Wrapper>
        </Right>
      </Top>

      <Bottom>
        <AnimationContainer>
          <Image src={ElementIcon} alt='icône bio' />
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

  ${tablet({
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

  ${tablet({
    display: 'flex',
    fontSize: 35
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

  ${mobile({
    margin: 0,
    flexDirection: 'column'
  })}

  ${tablet({
    margin: 0,
    flexDirection: 'column'
  })}

  #cosmetiques {
    height: 390px;
    margin: 20px;
  }
  #alimentaires {
    height: 470px;
    margin: 20px;
  }
`

const Right = styled.div`
  flex: 2;
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

  ${tablet({
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

  ${tablet({
    display: 'none'
  })}
`

const BioContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;

  ${mobile({
    display: 'none'
  })}
`

/** @format */

import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import { mobile, tablet } from '../responsive'

function Footer() {
  return (
    <Container>
      <Top>
        <Left>
          <Title>SafiyaPure</Title>
          <Description>
            SafiyaPure est une entreprise française spécialisée dans la vente
            d'huiles végétales alimentaires et cosmétiques. <br />
            Nous travaillons avec des coopératives du Maroc certifiées Ecocert.
          </Description>
          <SocialContainer>
            <SocialIcon color='385999'>
              <a
                href='https://www.facebook.com/SafiyaPureVegetableOils/'
                target='blank'
              >
                <FacebookIcon />
              </a>
            </SocialIcon>
            <SocialIcon color='E4405F'>
              <a href='https://www.instagram.com/safiyapure/' target='blank'>
                <InstagramIcon />
              </a>
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Center>
          <Wrapper>
            <Title>Liens Utiles</Title>
            <List>
              <ListItem>
                <Link href='/'>Home</Link>
              </ListItem>
              <ListItem>
                <Link href='/products/cosmetiques'>Hair Care</Link>
              </ListItem>
              <ListItem>
                <Link href='/products/cosmetiques'>Face Care</Link>
              </ListItem>
              <ListItem>
                <Link href='/products/cosmetiques'>Body Care</Link>
              </ListItem>
              <ListItem>
                <Link href='/terms-and-conditions'>
                  Conditions générales de ventes
                </Link>
              </ListItem>
            </List>
          </Wrapper>
        </Center>

        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <LocationOnIcon />
            50 chemin de certaud, 39300 Champagnole
          </ContactItem>
          <ContactItem>
            <PhoneIcon />
            +33 6 40 40 82 05
          </ContactItem>
          <ContactItem>
            <MailIcon />
            contact@safiyapurecom.fr
          </ContactItem>
          <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
        </Right>
      </Top>

      <Bottom>
        <Copyright>©2017 SafiyaPure. Tous droits réservés</Copyright>
      </Bottom>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  background-color: var(--background-color-primary);
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`
const Top = styled.div`
  display: flex;
  margin: 20px 0;

  ${mobile({
    flexDirection: 'column'
  })}

  ${tablet({
    flexDirection: 'column'
  })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5em;
  color: var(--text-color-primary);

  ${tablet({
    textAlign: 'center'
  })}
`

const SocialContainer = styled.div`
  display: flex;

  ${tablet({
    justifyContent: 'center'
  })}
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  a {
    color: inherit;
  }
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 90px;

  ${mobile({
    padding: 0
  })}

  ${tablet({
    padding: 0,
    alignItems: 'center'
  })}
`

const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
  color: var(--background-color-secondary);

  ${tablet({
    textAlign: 'center'
  })}
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: var(--text-color-primary);
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;

  ${tablet({
    display: 'flex',
    justifyContent: 'center'
  })}
`

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${tablet({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  })}
`

const ContactItem = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  color: var(--text-color-primary);

  svg {
    margin-right: 5px;
  }
`

const Payment = styled.img`
  width: 50%;

  ${tablet({
    width: '30%'
  })}
`

const Bottom = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--text-color-tertiary);
`

const Copyright = styled.span`
  color: var(--text-color-tertiary);
`

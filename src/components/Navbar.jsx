/** @format */

import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MuiButton from './MuiButton'
import MenuBtn from '../assets/menubutton.jpg'
import { mobile, tablet } from '../responsive'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)

  return (
    <Container>
      <Wrapper>
        <Left>SafiyaPure</Left>
        <Center expandNavbar={expandNavbar}>
          <Link to='/' className='link'>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to='/products' className='link'>
            <MenuItem>Produits</MenuItem>
          </Link>
          <Link to='/about' className='link'>
            <MenuItem>À Propos</MenuItem>
          </Link>
        </Center>
        <Right expandNavbar={expandNavbar}>
          <Link to='/register' className='link'>
            <MuiButton text='Register' />
          </Link>
          <Link to='/signin' className='link'>
            <MuiButton text='Sign In' />
          </Link>
          <Link to='/cart' className='link'>
            <MenuItem className='link'>
              <Badge badgeContent={1} color='success'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>

        <MenuList expandNavbar={expandNavbar}>
          <Link to='/' className='link'>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to='/products' className='link'>
            <MenuItem>Produits</MenuItem>
          </Link>
          <Link to='/about' className='link'>
            <MenuItem>A Propos</MenuItem>
          </Link>

          <Link to='/register' className='link'>
            <MuiButton text='Register' />
          </Link>
          <Link to='/signin' className='link'>
            <MuiButton text='Sign In' />
          </Link>
          <Link to='/cart' className='link'>
            <MenuItem className='link'>
              <Badge badgeContent={1} color='success'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </MenuList>

        <MenuButton className='menuButton'>
          <IconButton
            onClick={() => {
              setExpandNavbar((prev) => !prev)
            }}
          >
            <img src={MenuBtn} alt='bouton menu' />
          </IconButton>
        </MenuButton>
      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  background-color: var(--background-color-primary);
  .link {
    text-decoration: none;
    ${mobile({ margin: '30px' })};
    ${tablet({ margin: '30px' })};
  }
`

const Wrapper = styled.div`
  height: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  justify-content: flex-start;
  font-size: 18px;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${mobile({ display: 'none' })};
  ${tablet({ display: 'none' })};
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  justify-content: flex-end;

  ${mobile({ display: 'none' })};
  ${tablet({ display: 'none' })};
`

const MenuItem = styled.div`
  cursor: pointer;
  margin-left: 25px;

  ${mobile({
    fontSize: '16px',
    marginLeft: 0
  })};

  ${tablet({
    fontSize: '17px',
    marginLeft: '5px'
  })}
`

const MenuList = styled.ul`
  position: fixed;
  height: calc(100vh - 53px);
  top: 53px;
  right: ${(props) => (props.expandNavbar ? '0px' : '-50vw')};
  width: 50vw;
  background-color: #344032;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
`

const MenuButton = styled.div`
  display: none;

  ${mobile({
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    cursor: 'pointer'
  })}

  ${tablet({
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    cursor: 'pointer'
  })}
`

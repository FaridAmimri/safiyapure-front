/** @format */

import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MuiButton from './MuiButton'
import MenuBtn from '../images/menubutton.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mobile, tablet } from '../responsive'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)

  const handleMenu = () => {
    setExpandNavbar(!expandNavbar)
  }

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
            <MuiButton text="S'enregistrer" />
          </Link>
          <Link to='/login' className='link'>
            <MuiButton text='Se connecter' />
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
          <Link to='/' className='link' onClick={handleMenu}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to='/products' className='link' onClick={handleMenu}>
            <MenuItem>Produits</MenuItem>
          </Link>
          <Link to='/about' className='link' onClick={handleMenu}>
            <MenuItem>A Propos</MenuItem>
          </Link>

          <Link to='/register' className='link' onClick={handleMenu}>
            <MuiButton text="S'enregistrer" />
          </Link>
          <Link to='/login' className='link' onClick={handleMenu}>
            <MuiButton text='Se connecter' />
          </Link>
          <Link to='/cart' className='link' onClick={handleMenu}>
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
  background-color: var(--text-color-secondary);
  color: var(--text-color-primary);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  .link {
    text-decoration: none;
    ${mobile({ textAlign: 'center' })};
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
  color: var(--text-color-tertiary);
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

  button {
    margin-left: 25px;
  }

  ${mobile({ display: 'none' })};
  ${tablet({ display: 'none' })};
`

const MenuItem = styled.div`
  cursor: pointer;
  margin-left: 25px;
  color: var(--text-color-primary);

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
  background-color: var(--text-color-secondary);
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
  display: flex;
  justify-content: space-around;
  z-index: 999;
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

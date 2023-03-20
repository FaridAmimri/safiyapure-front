/** @format */

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from '@mui/icons-material'

function ProductItem({ item }) {
  return (
    <Container>
      <Image src={item.image} alt={item.description} />
      <Link>
        <Details>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Details>
      </Link>
    </Container>
  )
}

export default ProductItem

const Details = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #d2eda833;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  z-index: 3;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  position: relative;
  width: 330px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  overflow: hidden;

  &:hover ${Details} {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.1);
  }
`

const Image = styled.img`
  width: 90%;
  transition: all 1s ease;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--text-color-secondary);
  background-color: var(--text-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #f5fafd;
    transform: scale(1.1);
  }
`

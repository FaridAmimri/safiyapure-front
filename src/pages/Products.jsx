/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'
import { mobile, tablet } from '../responsive'

function Products() {
  const [type, setType] = useState('')

  const handleType = (event) => {
    setType(event.target.value)
  }

  return (
    <>
      <Navbar />
      <Container>
        <Title>Huiles Cosmétiques</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filtrer les produits :</FilterText>
            <FormControl sx={{ minWidth: 120 }} size='small'>
              <InputLabel id='type-sort' color='success'>
                Type
              </InputLabel>
              <Select
                labelId='type-sort'
                id='type-sort'
                value={type}
                label='Type'
                color='success'
                onChange={handleType}
              >
                <MenuItem value='Cheveux'>Cheveux</MenuItem>
                <MenuItem value='Visage'>Visage</MenuItem>
                <MenuItem value='Corps'>Corps</MenuItem>
              </Select>
            </FormControl>
          </Filter>
        </FilterContainer>
        <ProductList />
      </Container>
      <Footer />
    </>
  )
}

export default Products

const Container = styled.div`
  padding-top: 80px;
`

const Title = styled.h1`
  margin: 20px;
  text-align: center;
  color: var(--text-color-secondary);

  ${mobile({
    fontSize: 24
  })}
`

const FilterContainer = styled.div``

const Filter = styled.div`
  display: flex;
  margin: 20px;
  gap: 10px;
  align-items: center;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`

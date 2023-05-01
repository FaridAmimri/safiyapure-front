/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Box from '@mui/material/Box'
import MuiInput from '../components/MuiInput'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import PersonIcon from '@mui/icons-material/Person'
import { mobile } from '../responsive'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../redux/apiCalls'

const initialValue = {
  email: ''
}

function Register() {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState({})
  const dispatch = useDispatch()
  const { isFetching, ResetError } = useSelector((state) => state.user)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValue({
      [name]: value
    })
  }

  const validate = () => {
    let temp = {}
    const regexEmail = /\S+@\S+\.\S+/

    temp.email = regexEmail.test(value.email) ? '' : 'Entrer un email correct'
    setError({ ...temp })
    return Object.values(temp).every((x) => x === '')
  }

  const handleReset = (e) => {
    e.preventDefault()
    if (validate()) {
      reset(dispatch, value)
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <Title>MOT DE PASSE OUBLIÉ ?</Title>
          <Box className='form' component='form'>
            <MuiInput
              label='Entrer votre email'
              name='email'
              value={value.email}
              error={error.email}
              onChange={handleInputChange}
            />
            <Button
              className='button'
              variant='contained'
              color='success'
              sx={{ width: '230px' }}
              startIcon={<PersonIcon />}
              onClick={handleReset}
              disabled={isFetching}
            >
              Réinitialiser
            </Button>
          </Box>
        </FormContainer>
        <NotificationContainer>
          {isFetching && <CircularProgress color='success' />}
          {ResetError & !isFetching ? (
            <ErrorMessage>Compte email inexistant</ErrorMessage>
          ) : (
            ''
          )}
        </NotificationContainer>
      </Container>
      <Footer />
    </>
  )
}

export default Register

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 180px);
  padding: 100px 80px 80px 80px;

  ${mobile({
    height: '100vh',
    padding: '0'
  })}
`

const FormContainer = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    ${mobile({
      gap: 40,
      alignItems: 'center'
    })}
  }
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #2e7d32;

  ${mobile({
    textAlign: 'center'
  })}
`
const NotificationContainer = styled.div`
  margin: 20px;
`

const ErrorMessage = styled.span`
  color: #d32f2f;
`

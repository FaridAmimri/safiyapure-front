/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LockIcon from '@mui/icons-material/Lock'

function Login() {
  return (
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <Title>DÉJÀ INSCRIT ?</Title>
          <Box className='form' component='form'>
            <TextField
              className='input'
              id='email'
              label='Email'
              color='success'
            />
            <TextField
              className='input'
              id='password'
              label='Mot de passe'
              type='password'
              color='success'
            />

            <Button
              className='button'
              variant='contained'
              color='success'
              sx={{ width: '200px' }}
              startIcon={<LockIcon />}
            >
              Connexion
            </Button>
          </Box>
        </FormContainer>
      </Container>
      <Footer />
    </>
  )
}

export default Login

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`

const FormContainer = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .input {
    width: 300px;
  }
  .button svg {
    font-size: 25px;
  }
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #2e7d32;
`

/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import PersonIcon from '@mui/icons-material/Person'
import { mobile, tablet } from '../responsive'

function Register() {
  return (
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <Title>PREMIÈRE VISITE ?</Title>
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
            <TextField
              className='input'
              id='confirm-password'
              label='Confirmer mot de passe'
              type='password'
              color='success'
            />
            <div className='agreementContainer'>
              <FormControlLabel
                className='agreement'
                control={<Checkbox className='checkbox' color='success' />}
                label="J'accepte les termes et conditions d'utilisation"
              />
              <Button
                className='button'
                variant='contained'
                color='success'
                sx={{ width: '230px' }}
                startIcon={<PersonIcon />}
              >
                Créer mon compte
              </Button>
            </div>
          </Box>
        </FormContainer>
      </Container>
      <Footer />
    </>
  )
}

export default Register

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 80px 80px 80px;

  ${mobile({
    height: '80vh'
  })}
`

const FormContainer = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    ${mobile({
      gap: 40
    })}
  }
  .input {
    width: 300px;
  }
  .agreementContainer {
    display: flex;
    flex-direction: column;

    ${mobile({
      alignItems: 'center',
      gap: 20
    })}
  }
  .agreement {
    font-size: 12px;
    margin: 20px 0;
    margin-top: 0;
  }
  .checkbox {
    padding: 0px;
    margin-right: 10px;
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

  ${mobile({
    textAlign: 'center'
  })}
`

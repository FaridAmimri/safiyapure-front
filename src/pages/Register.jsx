/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Box from '@mui/material/Box'
import MuiInput from '../components/MuiInput'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import PersonIcon from '@mui/icons-material/Person'
import { mobile } from '../responsive'
import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/apiCalls'

const initialValues = {
  username: '',
  email: '',
  password: ''
}

function Register() {
  const formRef = useRef()
  const [values, setValues] = useState(initialValues)
  const [acceptTnC, setAcceptTnC] = useState(true)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const { currentUser, isFetching, RegisterError } = useSelector(
    (state) => state.user
  )

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleCheckBox = (e) => {
    setAcceptTnC(e.target.checked)
  }

  const validate = () => {
    let temp = {}
    const regexEmail = /\S+@\S+\.\S+/

    temp.username = values.username ? '' : 'Entrer votre nom'
    temp.email = regexEmail.test(values.email) ? '' : 'Entrer un email'
    temp.password = values.password ? '' : 'Entrer un mot de passe'
    temp.acceptTnC = acceptTnC
      ? ''
      : 'Veuillez accepter les conditions du contrat'
    setErrors({ ...temp })
    return Object.values(temp).every((x) => x === '')
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (validate()) {
      register(dispatch, values)
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <Title>PREMIÈRE VISITE ?</Title>
          <Box className='form' component='form' ref={formRef}>
            <MuiInput
              label="Entrer un nom d'utilisateur"
              name='username'
              value={values.username}
              error={errors.username}
              onChange={handleInputChange}
            />
            <MuiInput
              label='Entrer un email'
              name='email'
              value={values.email}
              error={errors.email}
              onChange={handleInputChange}
            />
            <MuiInput
              label='Entrer un mot de passe'
              name='password'
              type='password'
              value={values.password}
              error={errors.password}
              onChange={handleInputChange}
            />
            <div className='agreementContainer'>
              <FormControlLabel
                className='agreement'
                control={
                  <Checkbox
                    className='checkbox'
                    color='success'
                    checked={acceptTnC}
                    onChange={handleCheckBox}
                  />
                }
                label="J'accepte les termes et conditions d'utilisation"
              />
              {!acceptTnC && (
                <Alert severity='error'>
                  Veuillez accepter les conditions du contrat
                </Alert>
              )}
              <Button
                className='button'
                variant='contained'
                color='success'
                sx={{ width: '230px' }}
                startIcon={<PersonIcon />}
                onClick={handleRegister}
                disabled={isFetching}
              >
                Créer mon compte
              </Button>
            </div>
          </Box>
        </FormContainer>
        <ErrorContainer>
          {isFetching && <CircularProgress color='success' />}
          {RegisterError ? (
            <Alert severity='error'>
              Nom ou Email déjà associé à un compte
            </Alert>
          ) : (
            ''
          )}
          {currentUser && (
            <Alert severity='error'>Votre comte a bien été crée</Alert>
          )}
        </ErrorContainer>
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

const ErrorContainer = styled.div`
  width: 363px;
  margin: 20px 0;

  ${mobile({
    width: 300,
    display: 'flex',
    justifyContent: 'center'
  })}
`

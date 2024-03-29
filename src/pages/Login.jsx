/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Box from '@mui/material/Box'
import MuiInput from '../components/MuiInput'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import LockIcon from '@mui/icons-material/Lock'
import { mobile, tablet } from '../responsive'
import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'

const initialValues = {
  email: '',
  password: ''
}

function Login() {
  const formRef = useRef()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const { isFetching, loginError } = useSelector((state) => state.user)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const validate = () => {
    let temp = {}
    const regexEmail = /\S+@\S+\.\S+/

    temp.email = regexEmail.test(values.email) ? '' : 'Entrer un email correct'
    temp.password = values.password ? '' : 'Entrer un mot de passe'
    setErrors({ ...temp })
    return Object.values(temp).every((x) => x === '')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (validate()) {
      login(dispatch, values)
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <Title>DÉJÀ INSCRIT ?</Title>
          <Box className='form' component='form' ref={formRef}>
            <MuiInput
              label='Email'
              name='email'
              value={values.email}
              error={errors.email}
              onChange={handleInputChange}
            />
            <MuiInput
              label='Mot de passe'
              name='password'
              type='password'
              value={values.password}
              error={errors.password}
              onChange={handleInputChange}
            />

            <Button
              className='button'
              variant='contained'
              color='success'
              sx={{ width: '200px' }}
              startIcon={<LockIcon />}
              onClick={handleLogin}
              disabled={isFetching}
            >
              Connexion
            </Button>
            {/* <Link href='/password'>Mot de passe oublié ?</Link> */}
          </Box>
        </FormContainer>
        <ErrorContainer>
          {isFetching && <CircularProgress color='success' />}
          {loginError & !isFetching ? (
            <Alert severity='error'>Email ou mot de passe incorrect</Alert>
          ) : (
            ''
          )}
        </ErrorContainer>
      </Container>
      <Footer />
    </>
  )
}

export default Login

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  padding-top: 150px;

  ${mobile({
    height: '100vh',
    padding: 0,
    justifyContent: 'center'
  })}

  ${tablet({
    paddingTop: 140
  })}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #2e7d32;

  ${mobile({
    fontSize: 20,
    textAlign: 'center'
  })}
`

const FormContainer = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    ${mobile({
      alignItems: 'center',
      gap: 40
    })}
  }
  .input {
    width: 300px;
  }
  .button svg {
    font-size: 25px;
  }
`

// const Link = styled.a`
//   font-size: 15px;
//   text-decoration: underline;
//   cursor: pointer;
//   color: inherit;
// `

const ErrorContainer = styled.div`
  width: 300px;
  margin: 30px 0;

  ${mobile({
    display: 'flex',
    justifyContent: 'center'
  })}
`

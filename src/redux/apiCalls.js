/** @format */

import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutStart,
  resetStart,
  resetSuccess,
  resetFailure
} from './userSlice'
import { publicRequest } from '../requests'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (error) {
    dispatch(loginFailure())
  }
}

export const register = async (dispatch, user) => {
  dispatch(registerStart())
  try {
    await publicRequest.post('/auth/register', user)
    dispatch(registerSuccess())
  } catch (error) {
    dispatch(registerFailure())
  }
}

export const logout = (dispatch) => {
  dispatch(logoutStart())
}

export const reset = async (dispatch, user) => {
  dispatch(resetStart())
  try {
    await publicRequest.post('/password/reset', user)
    dispatch(resetSuccess())
  } catch (error) {
    dispatch(resetFailure())
  }
}

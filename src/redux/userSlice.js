/** @format */

import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    loginError: false,
    RegisterError: false,
    ResetError: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
      state.loginError = false
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.loginError = false
      state.currentUser = action.payload
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.loginError = true
    },
    registerStart: (state) => {
      state.isFetching = true
      state.RegisterError = false
    },
    registerSuccess: (state, action) => {
      state.isFetching = false
      state.RegisterError = false
      state.currentUser = action.payload
    },
    registerFailure: (state) => {
      state.isFetching = false
      state.RegisterError = true
    },
    logoutStart: (state) => {
      state.currentUser = null
      state.isFetching = false
      state.loginError = false
      state.RegisterError = false
    },
    resetStart: (state) => {
      state.isFetching = true
      state.ResetError = false
    },
    resetSuccess: (state) => {
      state.isFetching = false
      state.ResetError = false
    },
    resetFailure: (state) => {
      state.isFetching = false
      state.ResetError = true
    }
  }
})

export const {
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
} = userSlice.actions
export default userSlice.reducer

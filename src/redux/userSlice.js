/** @format */

import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    loginError: false,
    RegisterError: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
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
    registerSuccess: (state) => {
      state.isFetching = false
      state.RegisterError = false
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
  logoutStart
} = userSlice.actions
export default userSlice.reducer

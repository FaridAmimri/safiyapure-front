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
    },
    registerSuccess: (state) => {
      state.isFetching = false
    },
    registerFailure: (state) => {
      state.isFetching = false
      state.RegisterError = true
    }
  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure
} = userSlice.actions
export default userSlice.reducer

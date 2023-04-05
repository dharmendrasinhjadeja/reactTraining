import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './loginAuth'

//initialize Token
const userToken = localStorage.getItem('userToken')

const initialState = {
  loading: false,
  userInfo: null,
  isAuthenticated: localStorage.getItem('userToken') ? true : false,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken')
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.isAuthenticated = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { logout, setCredentials } = authSlice.actions
export default authSlice.reducer

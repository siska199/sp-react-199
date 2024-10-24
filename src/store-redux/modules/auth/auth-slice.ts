import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState= {
  isAuthenticated: false,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleSetAuth : (state, action:PayloadAction<boolean>)=>{
      console.log('payload: ', action.payload)
      state.isAuthenticated=action.payload
    }
  }
})

export default authSlice.reducer

export const {handleSetAuth } = authSlice.actions

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {fetchProducts} from './EcommerceApi'

const   initialState= {
    value: 0,
products: null
  }
export const fetchAllProductsAsync=createAsyncThunk('ecommerce/fetchProducts',
async ()=>{
    const response = await fetchProducts
    return response
}
)
export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState,
  
  reducers: {
    increment: (state) => { state.value += 1},
    decrement: (state) => { state.value -= 1},
    incrementByAmount: (state, action) => { state.value += action.payload },
  },
  extraReducers: (builder) =>{
      builder.addCase(fetchAllProductsAsync.pending, (state)=>{
          state.status = 'loading'
      })
      builder.addCase(fetchAllProductsAsync.fulfilled, (state, action)=>{
          state.products = action.payload
        state.status = 'idle'
    })
    builder.addCase(fetchAllProductsAsync.rejected, (state)=>{
        state.status = 'failed'
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = ecommerceSlice.actions

export default ecommerceSlice.reducer


   // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
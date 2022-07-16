import { configureStore } from '@reduxjs/toolkit'
import ecommerceReducer from './features/ecommerce/EcommerceSlice'



export default configureStore({
  reducer: {
      ecommerce: ecommerceReducer,
  },
})
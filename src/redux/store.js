import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "./slices/filterSlice.js";

export default configureStore({
   reducer: {
      filter: filterSlice
   },
})
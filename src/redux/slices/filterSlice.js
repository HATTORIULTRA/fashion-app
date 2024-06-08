import {createSlice} from "@reduxjs/toolkit";

export const filterSlice = createSlice({
   name: 'filters',
   initialState: {
      sort: {
         name: 'популярности',
         sortProperty: 'rating'
      }
   },
   reducers: {
      setSort(state, action) {
         state.sort = action.payload;
      }
   }
});

export const {setSort} = filterSlice.actions;

export default filterSlice.reducer;
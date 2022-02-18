import { createSlice } from "@reduxjs/toolkit";

export const anotherSlice = createSlice({
  name: 'another',
  initialState: null,
  reducers: {},
  extraReducers: {
    ['logout']: (state, action) => {
      console.log('Logout is called in ANOTHER')
    }
  }
});

export default anotherSlice.reducer
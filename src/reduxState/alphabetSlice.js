// slice.js
import { createSlice } from '@reduxjs/toolkit';
import imageAlphabetMap from '../image-alphabet-map';
const initialState = {
  selectedAlphabet: null,
  image: null,
  audio:null
};

const alphabetSlice = createSlice({
  name: 'alphabet',
  initialState,
  reducers: {
    setAlphabet(state, action) {
      state.selectedAlphabet = action.payload;
      state.image = imageAlphabetMap[action.payload]["image"];
      state.audio = imageAlphabetMap[action.payload]["audio"];
    },
  },
});

export const { setAlphabet } = alphabetSlice.actions;
export default alphabetSlice.reducer;

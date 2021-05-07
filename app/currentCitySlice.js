import {createSlice} from '@reduxjs/toolkit';

const currentCitySlice = createSlice({
  name: 'currentCity',
  initialState: {
    value: null,
  },
  reducers: {
    setCurrentCity: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
  },
});

export const {setCurrentCity} = currentCitySlice.actions;

export const selectCurrentCity = state => state.currentCity.value;

export default currentCitySlice.reducer;

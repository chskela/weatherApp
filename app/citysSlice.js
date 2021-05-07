import {createSlice} from '@reduxjs/toolkit';

const citysSlice = createSlice({
  name: 'citys',
  initialState: {
    value: ['Sochi', 'Moscow'],
  },
  reducers: {
    addCity: (state, action) => {
      const hasCity = state.value.includes(action.payload);
      state.value =
        hasCity || !action.payload
          ? state.value
          : [...state.value, action.payload];
    },
    removeCity: (state, action) => {
      state.value = state.value.filter(city => city !== action.payload);
    },
  },
});

export const {addCity, removeCity} = citysSlice.actions;

export const selectCity = state => state.citys.value;

export default citysSlice.reducer;

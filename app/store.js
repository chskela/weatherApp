import {configureStore} from '@reduxjs/toolkit';
import citysReducer from './citysSlice';
import currentCityReducer from './currentCitySlice';

export default configureStore({
  reducer: {
    citys: citysReducer,
    currentCity: currentCityReducer,
  },
});

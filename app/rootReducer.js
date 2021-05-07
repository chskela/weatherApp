import {combineReducers} from 'redux';
import citysReducer from './citysSlice';
import currentCityReducer from './currentCitySlice';

export default rootReducer = combineReducers({
  citys: citysReducer,
  currentCity: currentCityReducer,
});

import { combineReducers } from 'redux';
import Reducer from './reducer';

const rootReducer = combineReducers({
  weather: Reducer
});

export default rootReducer;

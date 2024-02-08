import { filtersReducer } from './filters/filters-reducer';

const { combineReducers } = require('redux');
const { positionsReducer } = require('./positions/positions-reducer');

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filtersReducer,
});

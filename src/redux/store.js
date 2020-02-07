import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import filmsReducer from './films/filmsReducer';
import peopleReducer from "./people/peopleReducer";
import planetsReducer from "./planets/planetsReducer";
import starshipsReducer from "./starships/starshipsReducer";
import vehiclesReducer from "./vehicles/vehiclesReducer";
import speciesReducer from "./species/speciesReducer";
import controllerReducer from './controller/controllerReducers';
import globalSearchReducers from "./globalSearch/globalSearchReducers";

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  films: filmsReducer,
  people : peopleReducer,
  planets : planetsReducer,
  starships : starshipsReducer,
  vehicles : vehiclesReducer,
  species : speciesReducer,
  controller : controllerReducer,
  search : globalSearchReducers
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
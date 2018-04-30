import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer //the name for the obj after state (so name carefully)
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
}

export default configureStore;

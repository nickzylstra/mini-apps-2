import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleWare)),
);

export default store;

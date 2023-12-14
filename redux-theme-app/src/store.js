

import { createStore } from 'redux';
import themeReducer from './themeReducer';

const store = createStore(
  themeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for Redux DevTools
);

export default store;

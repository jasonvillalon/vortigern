import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { Store } from './IStore';
import { counterReducer } from './modules/counter';
import { starsReducer } from './modules/stars';

// import { reducer } from 'redux-connect';

const rootReducer: Redux.Reducer<Store> = combineReducers<Store>({
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer,
  // reduxAsyncConnect: reducer,
});

export default rootReducer;

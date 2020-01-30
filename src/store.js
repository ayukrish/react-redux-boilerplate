/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
// import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from './reducer';
// import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// const reduxRouterMiddleware = routerMiddleware(createBrowserHistory());
// eslint-disable-next-line no-underscore-dangle
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const configureStore = () => {
  const store = createStore(rootReducer,
    compose(
      applyMiddleware(...middlewares),
      process.env.NODE_ENV === 'development' ? devTool : f => f,
    ));
  store.asyncReducers = {};
  // sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore();

import { createStore, applyMiddleware } from 'redux';
import { middleware } from 'navigation/AppNavigator';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducers from 'ducks';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const storeCreator = () => {
  const store = createStore(
    appReducers,
    composeEnhancers(applyMiddleware(thunkMiddleware, middleware))
  );

  if ((module as any).hot) {
    (module as any).hot.accept(() => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('ducks').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

const store = storeCreator();

export default store;

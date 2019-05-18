import { AppNavigator } from 'navigation/AppNavigator';

const { router } = AppNavigator;
const mainNavAction = router.getActionForPathAndParams('splashStack');
const initialNavState = mainNavAction && router.getStateForAction(mainNavAction);

const Reducer = (state = initialNavState, action: any) => {
  const nextState = router.getStateForAction(action, state);

  return nextState || state;
};

export default Reducer;

import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { AppState } from 'ducks';
import {BottomTabs} from 'components';
import {Splash, Home} from 'screens';
import { HOME_SCREEN } from './screens';
import { HOME_STACK } from './stacks';

// home stack
const HomeStack = createBottomTabNavigator(
  {
    [HOME_SCREEN]: Home,
  },
  {tabBarComponent: (props) => <BottomTabs {...props} style={{ borderTopColor: '#605F60' }} />,
      defaultNavigationOptions: () => ({
          tabBarOnPress: ({ defaultHandler }) => {
              defaultHandler();
          },
          tabBarOptions: {
              showLabel: false,
              style: { height: 80, borderTopColor: '#42c8f4', borderTopWidth: 1 },
          },
          header: null,
      })}
);

export const AppNavigator = createStackNavigator(
  {
    splashStack: {
      screen: Splash,
      navigationOptions: () => ({
        header: null,
      }),
    },
    [HOME_STACK]: {
      screen: HomeStack,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
  },
  {
    initialRouteName: 'Splash',
  }
);

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  (state: AppState) => state.nav
);

const AppWithNavigationState: any = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = (state: AppState) => ({
  state: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

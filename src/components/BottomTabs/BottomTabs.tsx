import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationProps } from 'ducks/navigation';
import { HOME_SCREEN } from 'navigation';
import { TabsWrapper, TabWrapper, TabText, TabImage, TabActiveIndicator } from './BottomTabs.style';

type Props = NavigationProps & {};

const BottomTabs = ({ navigation }: Props) => {
  const routeIndex = navigation.state.index;
  const currentRoute = navigation.state.routes[routeIndex];
  const routeName = currentRoute.routeName;

  return (
    <SafeAreaView style={{ backgroundColor: '#282828' }}>
      <TabsWrapper>
        <TabWrapper onPress={() => navigation.navigate(HOME_SCREEN)}>
          <TabImage name={'ios-home'} />
          <TabText>Home</TabText>
          <TabActiveIndicator isFocused={routeName === HOME_SCREEN} />
        </TabWrapper>
        <TabWrapper onPress={() => navigation.navigate(HOME_SCREEN)}>
          <TabImage name={'ios-albums'} />
          <TabText>Browse</TabText>
          <TabActiveIndicator isFocused={routeName === HOME_SCREEN} />
        </TabWrapper>
        <TabWrapper onPress={() => navigation.navigate(HOME_SCREEN)}>
          <TabImage name={'ios-search'} />
          <TabText>Search</TabText>
          <TabActiveIndicator isFocused={routeName === HOME_SCREEN} />
        </TabWrapper>
        <TabWrapper onPress={() => navigation.navigate(HOME_SCREEN)}>
          <TabImage name={'ios-radio'} />
          <TabText>Radio</TabText>
          <TabActiveIndicator isFocused={routeName === HOME_SCREEN} />
        </TabWrapper>
        <TabWrapper onPress={() => navigation.navigate(HOME_SCREEN)}>
          <TabImage name={'ios-book'} />
          <TabText>Library</TabText>
          <TabActiveIndicator isFocused={routeName === HOME_SCREEN} />
        </TabWrapper>
      </TabsWrapper>
    </SafeAreaView>
  );
};

export default BottomTabs;

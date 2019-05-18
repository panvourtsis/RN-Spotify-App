import React, { useEffect } from 'react';
import { ImageBackground, LoadingIndicator } from './Splash.style';
import { NavigationProps } from 'ducks/navigation/types';
import { HOME_SCREEN } from 'navigation';

type Props = {};

const Splash: React.FC<Props & NavigationProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // TODO to be removed - only to have a loading screen
      navigation.navigate(HOME_SCREEN);
    }, 2000);
  });

  return (
    <ImageBackground>
      <LoadingIndicator size="large" color="#000000" />
    </ImageBackground>
  );
};

export default Splash;

import React from 'react';
import { Wrapper, Heading } from './Home.style';
import { Text } from 'react-native';
import { NavigationProps } from 'ducks/navigation/types';

type Props = {};

const Home: React.FC<Props & NavigationProps> = ({ navigation }) => {
  return (
    <Wrapper>
      <Heading>Home</Heading>
    </Wrapper>
  );
};

export default Home;

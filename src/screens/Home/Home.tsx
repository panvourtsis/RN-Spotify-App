import React from 'react';
import { Wrapper, Heading } from './Home.style';
import { NavigationProps } from 'ducks/navigation/types';

type Props = {};

const Home: React.FC<Props & NavigationProps> = () => (
  <Wrapper>
    <Heading>Home</Heading>
  </Wrapper>
);

export default Home;

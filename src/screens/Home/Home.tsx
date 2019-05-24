import React from 'react';
import { NavigationProps } from 'ducks/navigation';
import { Tile } from 'components';
import { Wrapper, SectionTitle, SectionSubtitle, Section, SectionBody } from './Home.style';

type Props = {};

const Home: React.FC<Props & NavigationProps> = () => (
  <Wrapper>
    <Section>
      <SectionTitle>Recently Played</SectionTitle>
      <SectionBody>
        <Tile title="Hello Darkness" imageUrl="https://lorempixel.com/200/200" />
        <Tile title="Hello Darkness" imageUrl="https://lorempixel.com/200/200" />
        <Tile title="Hello Darkness" imageUrl="https://lorempixel.com/200/200" />
        <Tile title="Hello Darkness" imageUrl="https://lorempixel.com/200/200" />
        <Tile title="Hello Darkness" imageUrl="https://lorempixel.com/200/200" />
      </SectionBody>
    </Section>
    <Section>
      <SectionTitle>Your heavy rotation</SectionTitle>
      <SectionSubtitle>The music you{"'"} ve had on repeat this month</SectionSubtitle>
      <SectionBody>
        <Tile
          shape="circle"
          title="Panagiotis V."
          subtitle="V for Vourtsis"
          imageUrl="https://lorempixel.com/200/200"
        />
        <Tile shape="circle" title="Living in Glyfada" imageUrl="https://lorempixel.com/200/200" />
        <Tile shape="circle" title="Driving an Ibiza" imageUrl="https://lorempixel.com/200/200" />
        <Tile shape="circle" title="Wearing Birds" imageUrl="https://lorempixel.com/200/200" />
        <Tile shape="circle" title="Loving shoes" imageUrl="https://lorempixel.com/200/200" />
      </SectionBody>
    </Section>
  </Wrapper>
);

export default Home;

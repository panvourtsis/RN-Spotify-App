import React from 'react';
import { flex } from 'theme/functions';
import { ScrollView, ScrollViewProps } from 'react-native';
import styled from '@emotion/native';

export const Wrapper = styled.ScrollView`
  ${flex};
  background-color: #000;
`;

export const Section = styled.SafeAreaView`
  margin-bottom: 60px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 15px;
`;

export const SectionSubtitle = styled.Text`
  font-size: 12px;
  color: #aaa;
  text-align: center;
  margin-bottom: 20px;
`;

export const SectionBody = styled((props: ScrollViewProps) => (
  <ScrollView showsHorizontalScrollIndicator={false} horizontal {...props} />
))``;

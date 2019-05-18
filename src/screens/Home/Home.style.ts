import { flexCenter, flex } from 'theme/functions';
import styled from '@emotion/native';

export const Wrapper = styled.View(flex, flexCenter, {
  backgroundColor: '#000',
});

export const Heading = styled.Text({
  color: '#fff',
  fontSize: 19,
});

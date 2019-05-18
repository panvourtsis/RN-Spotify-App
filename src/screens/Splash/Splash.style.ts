import { flexCenter, flex } from 'theme/functions';
import styled from '@emotion/native';

export const ImageBackground = styled.ImageBackground(flex, flexCenter);

export const LoadingIndicator = styled.ActivityIndicator({
  marginTop: 30,
});

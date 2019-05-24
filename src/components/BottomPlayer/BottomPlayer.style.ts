import styled from '@emotion/native';
import { flexCenterHorizontal, flex, row, flexCenter } from 'theme/functions';

export const Wrapper = styled.View(flexCenter, row, {
  paddingVertical: 5,
  height: 50,
  paddingHorizontal: 10,
  borderBottomColor: '#000',
  borderBottomWidth: 1,
});

export const PlayerWrapper = styled.View(flex, row, flexCenterHorizontal, {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  paddingVertical: 5,
});

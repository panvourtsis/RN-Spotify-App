import styled from '@emotion/native';
import { flexCenterHorizontal, flex } from 'theme/functions';
import VectorIcon from 'react-native-vector-icons/dist/Ionicons';

export const TabsWrapper = styled.View(({ theme }: any) => ({
  flexDirection: 'row',
  paddingTop: 15,
  backgroundColor: theme.colors.grey,
}));

export const TabWrapper = styled.TouchableOpacity(flex, flexCenterHorizontal);

export const TabText = styled.Text({ fontSize: 12, color: '#fff', textAlign: 'center' });

export const TabActiveIndicator = styled.View({
  height: 1,
  width: null,
});

export const TabImage = styled(VectorIcon)({ alignSelf: 'center', color: '#fff', fontSize: 19 });

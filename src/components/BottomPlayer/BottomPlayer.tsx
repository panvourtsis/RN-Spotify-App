import React from 'react';
import { View, Text } from 'react-native';
import VectorIcon5 from 'react-native-vector-icons/dist/FontAwesome5';
import VectorIcon from 'react-native-vector-icons/dist/FontAwesome';
import { Wrapper, PlayerWrapper } from './BottomPlayer.style';

const BottomPlayer = () => (
  <Wrapper>
    <VectorIcon name={'heart-o'} color="#fff" size={24} style={{ paddingHorizontal: 10 }} />
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={{ flex: 1, textAlign: 'center', color: '#fff', fontSize: 12 }}>
        Galway Girl &#8226; <Text style={{ color: '#ccc' }}>Ed Sheeran</Text>
      </Text>
      <PlayerWrapper>
        <VectorIcon name={'tv'} color="#fff" size={11} style={{ paddingHorizontal: 10 }} />
        <Text style={{ color: '#fff', fontSize: 10 }}>Available Devices</Text>
      </PlayerWrapper>
    </View>
    <VectorIcon5 name={'play-circle'} color="#fff" size={24} style={{ paddingHorizontal: 10 }} />
  </Wrapper>
);

export default BottomPlayer;

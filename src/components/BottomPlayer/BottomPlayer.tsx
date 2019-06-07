import React, { useState } from 'react';
import { Animated, View, Text, PanResponder, Dimensions, Image } from 'react-native';
import VectorIcon5 from 'react-native-vector-icons/dist/FontAwesome5';
import VectorIcon from 'react-native-vector-icons/dist/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import { Wrapper, PlayerWrapper } from './BottomPlayer.style';

const FIXED_HEIGHT = 135;

const BottomPlayer = () => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const [open, setOpen] = useState(false);
  const [opacity] = useState(new Animated.Value(1));
  const [bottomOpacity] = useState(new Animated.Value(0));
  const [pan] = useState(new Animated.ValueXY({ x: 0, y: screenHeight - FIXED_HEIGHT }));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      console.log('tap');
    },
    onPanResponderMove: (e, g) => {
      if (g.dy === 0) {
        return;
      }
      console.log('onPanResponderMove', g.dy);
      const t = open ? g.dy : screenHeight - FIXED_HEIGHT + g.dy;
      const openV = open ? -1 : 1;
      const openRandomValue = open ? 300 : 150;
      const value = g.dy / openRandomValue + openV;
      const value2 = Math.abs((g.dy / 300) * openV);
      if (g.moveY < screenHeight - FIXED_HEIGHT) {
        pan.setValue({ x: g.dx, y: t });
      }
      opacity.setValue(value);
      bottomOpacity.setValue(value2);
    },
    onPanResponderRelease: (e, g) => {
      const duration = 200;
      const percentage = Math.floor((g.dy / screenHeight) * 100) * -1;
      if (percentage > 15) {
        Animated.timing(pan.y, { toValue: 0, duration: duration }).start(() =>
          pan.setValue({ x: 0, y: 0 })
        );
        Animated.timing(opacity, { toValue: 0, duration: duration }).start(() =>
          opacity.setValue(0)
        );
        Animated.timing(bottomOpacity, { toValue: 0, duration: duration }).start(() =>
          bottomOpacity.setValue(1)
        );
        setOpen(true);
      } else {
        Animated.timing(pan.y, { toValue: screenHeight - FIXED_HEIGHT, duration: duration }).start(
          () => pan.setValue({ x: 0, y: screenHeight - FIXED_HEIGHT })
        );
        Animated.timing(opacity, { toValue: 1, duration: duration }).start(() =>
          opacity.setValue(1)
        );
        Animated.timing(bottomOpacity, { toValue: 1, duration: duration }).start(() =>
          bottomOpacity.setValue(0)
        );
        setOpen(false);
      }
    },
  });

  const newStyle = {
    marginTop: -screenHeight,
    transform: [{ translateX: 0 }, { translateY: pan.y < 0 ? 0 : pan.y }],
  };
  const newOpacityStyle = {
    opacity,
  };
  const newOpacityStyle2 = {
    opacity: bottomOpacity,
  };
  return (
    <Animated.View style={[newStyle]} {...panResponder.panHandlers}>
      <View style={{ flexDirection: 'column', backgroundColor: '#282828' }}>
        <Animated.View style={[newOpacityStyle, { flex: 1, flexDirection: 'column', zIndex: 100 }]}>
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
            <VectorIcon5
              name={'play-circle'}
              color="#fff"
              size={24}
              style={{ paddingHorizontal: 10 }}
            />
          </Wrapper>
        </Animated.View>
        <Animated.View
          style={[
            newOpacityStyle2,
            {
              height: screenHeight - FIXED_HEIGHT,
              marginTop: 50,
              paddingHorizontal: 15,
              borderBottomColor: '#000',
              borderBottomWidth: 1,
              alignItems: 'center',
              flexDirection: 'column',
            },
          ]}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <FeatherIcon name={'chevron-down'} color="#fff" size={24} />
            <Text style={{ color: '#fff', flex: 1, textAlign: 'center' }}>
              Galway Girl - Ed Sheeran
            </Text>
            <FeatherIcon name={'more-horizontal'} color="#fff" size={24} />
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: 'https://lorempixel.com/200/200' }}
              style={{
                width: screenWidth - 40,
                height: screenWidth - 40,
                marginTop: 20,
                marginBottom: 20,
              }}
            />
          </View>
          <View style={{ width: null }}>
            <Text style={{ fontSize: 22, color: '#fff', fontWeight: 'bold' }}>Galway Girl</Text>
            <Text style={{ fontSize: 19, color: '#fff' }}>Ed Sheeran</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-evenly',
              // alignItems: 'center',
            }}
          >
            <VectorIcon name={'heart-o'} color="#fff" size={24} style={{ flex: 1 }} />
            <VectorIcon name={'step-backward'} color="#fff" size={30} style={{ flex: 1 }} />
            <VectorIcon name={'play-circle'} color="#fff" size={70} style={{ flex: 1 }} />
            <VectorIcon name={'step-forward'} color="#fff" size={30} style={{ flex: 1 }} />
            <VectorIcon name={'heart-o'} color="#fff" size={24} style={{ flex: 1 }} />
          </View>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default BottomPlayer;
